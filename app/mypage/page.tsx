'use client';

import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { axiosToken } from '@apis/instance/axiosToken';
import { UserInfo } from '@apis/users/getUserInfo';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import Input from '@components/molecules/Input';
import ModalCheckIt from '@components/molecules/ModalCheckIt';
import DashboardNav from '@components/organisms/DashboardNav';
import SideBar from '@components/organisms/SideBar/SideBar';

import { useUserStore } from '@store/store/userStore';

import useToggle from '../signin/_hooks/useToggle';

interface IFormInput {
  nickname: string;
  profileImageUrl: string;
}

interface PasswordChange {
  password: number;
  newPassword: number;
  newPasswordCheck: number;
}

// @ToDo 여러 긴급 처방이 있어서 꼭 리팩토링 부탁드립니다!
function MyPage() {
  const { user, setUser } = useUserStore();
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('/images/icons/profile-add-filledViolet_5544DA-w182-h183.svg');
  const [PasswordWrong, setPasswordWrong] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [profileButton, setProfileButton] = useState<boolean>(false);
  const [passwordButton, setPasswordButton] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPasswordError, setShowPasswordError, showPasswordToggle] = useToggle(false);

  // profile
  const { register: register1, handleSubmit: handleSubmit1, watch: watch1 } = useForm<IFormInput>();

  const onSubmit1: SubmitHandler<IFormInput> = (data: { nickname: string }) => {
    const postData = {
      nickname: data.nickname,
      profileImageUrl: profileValue.profileImageUrl,
    };
    handleChangeProfile(postData);
  };

  // Password
  const { register: register2, handleSubmit: handleSubmit2, watch: watch2 } = useForm<PasswordChange>();

  const onSubmit2: SubmitHandler<PasswordChange> = (data: {
    password: number;
    newPassword: number;
    newPasswordCheck: number;
  }) => {
    const PasswordValue = {
      password: String(data.password),
      newPassword: String(data.newPassword),
    };

    if (data.newPasswordCheck !== data.newPassword) {
      setPasswordWrong(true);
    } else {
      setPasswordWrong(false);
      passwordChange(PasswordValue);
    }
  };

  const [profileValue, setProfileValue] = useState({
    profileImageUrl: null,
  });

  // watch 사용
  const profile1 = watch1('nickname');
  const profile2 = watch1('profileImageUrl');
  const Password1 = String(watch2('newPassword'));
  const Password2 = String(watch2('newPasswordCheck'));
  const Password3 = String(watch2('password'));
  // watch 사용

  useEffect(() => {
    if (profile1 === user.nickname || profile2 === user.profileImageUrl) {
      setProfileButton(true);
    } else {
      setProfileButton(false);
    }
  }, [profile1, profile2, user.nickname, user.profileImageUrl]);

  useEffect(() => {
    if (Password1.length === 0 || Password2.length === 0 || Password3.length === 0) {
      setPasswordButton(true);
    } else {
      setPasswordButton(false);
    }
  }, [Password1, Password2, Password3]);

  const router = useRouter();

  // -- 이미지 / 닉네임 변경 시작
  const fetchProfileImage = useCallback(async () => {
    // 긴급 처방
    // 이미지가 기본 이미지가 아닐 때 서버에서 이미지를 가져오지 않는다.
    // 따라서 이미지가 기본 이미지일 때 서버에서 이미지를 가져온다
    if (previewUrl !== '/images/icons/profile-add-filledViolet_5544DA-w182-h183.svg') {
      return;
    }

    try {
      const response = await axiosToken.get('users/me');

      if (response.data.profileImageUrl !== null && response.data.profileImageUrl !== previewUrl) {
        setPreviewUrl(response.data.profileImageUrl);
        setProfileValue((prev) => ({
          ...prev,
          profileImageUrl: response.data.profileImageUrl,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  }, [previewUrl]);

  useEffect(() => {
    fetchProfileImage();
  }, [fetchProfileImage]);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axiosToken.post(`/users/me/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        return response.data.profileImageUrl;
      }
    } catch (err) {
      console.error(err);
    }

    return null;
  };

  const handleChangeProfile = async (data: { nickname: string; profileImageUrl: null }) => {
    try {
      const res = await axiosToken.put<UserInfo>(`/users/me`, data);
      setUser(res.data);

      if (!res.data.profileImageUrl) {
        setPreviewUrl('/images/icons/profile-add-filledViolet_5544DA-w182-h183.svg');
      } else {
        setPreviewUrl(res.data.profileImageUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 긴급 처방
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file) {
        const imageUrl = await uploadImage(file);

        if (imageUrl) {
          setProfileValue((prev) => ({
            ...prev,
            profileImageUrl: imageUrl,
          }));

          setPreviewUrl(imageUrl);

          setProfileButton(false);
        }
      }
    }
  };

  const handleDeleteImage = async () => {
    setProfileValue((prev) => ({
      ...prev,
      profileImageUrl: null,
    }));
    setPreviewUrl('/images/icons/profile-add-filledViolet_5544DA-w182-h183.svg');
    // 긴급 처방
    await handleChangeProfile({ nickname: user.nickname, profileImageUrl: null });
  };

  useEffect(() => {
    if (profileValue.profileImageUrl === null) {
      setProfileButton(false);
    }
  }, [profileValue.profileImageUrl]);

  // -- 이미지 / 닉네임 변경 끝

  // 비밀번호 변경 시작
  const passwordChange = async (data: { password: string; newPassword: string }) => {
    if (!PasswordWrong && data.password !== '' && data.newPassword !== '') {
      try {
        const res = await axiosToken.put('/auth/password', data);
        console.log(res);

        if (res.status === 204) {
          setModalText('비밀번호가 변경 되었습니다');
          showPasswordToggle();
        }

        router.push('/mypage');
      } catch (err) {
        setModalText('현재 비밀번호가 틀렸습니다.');
        showPasswordToggle();
      }
    }
  };

  // 비밀번호 변경 끝

  const handleNewPasswordBlur = () => {
    const newPassword = Password1;
    const newPasswordCheck = Password2;

    if (newPassword !== newPasswordCheck && newPassword !== '' && newPasswordCheck !== '') {
      setPasswordWrong(true);
    } else {
      setPasswordWrong(false);
    }
  };

  return (
    <S.Wrap>
      <S.passwordErrorText>
        {showPasswordError && (
          <ModalCheckIt text={modalText} submitButtonText='확인' errorMessage={showPasswordToggle} />
        )}
      </S.passwordErrorText>
      <SideBar />
      <S.MypageWrapper>
        <DashboardNav />
        <S.MyPage>
          <S.Back onClick={() => router.back()}>{'<'} 뒤로가기</S.Back>

          <S.Box onSubmit={handleSubmit1(onSubmit1)}>
            <S.BoxTitle>프로필</S.BoxTitle>
            <S.InputBox>
              <S.BoxImage>
                <Image
                  key={previewUrl}
                  src={previewUrl}
                  alt='이미지 추가'
                  fill
                  placeholder='blur'
                  blurDataURL={'/images/icons/profile-add-filledViolet_5544DA-w182-h183.svg'}
                />
                <S.ChangeImage>
                  <S.ChangeImageInner htmlFor='file'>
                    <S.ImageEdit>
                      <Image
                        src={'/images/icons/profile-edit-filledGray_9FA6B2-w182-h183.svg'}
                        alt='이미지 변경'
                        fill
                      />
                    </S.ImageEdit>
                  </S.ChangeImageInner>

                  <input
                    {...register1('profileImageUrl')}
                    type='file'
                    name='profileImageUrl'
                    id='file'
                    onChange={handleFileChange}
                  />
                </S.ChangeImage>
              </S.BoxImage>
              <S.Inputs>
                {currentUser && (
                  <>
                    <Input title='이메일' placeholder={currentUser.email} data='이메일' disabled />
                    <Input
                      hookform={register1('nickname')}
                      title='닉네임'
                      placeholder={currentUser.nickname}
                      defaultValue={currentUser.nickname}
                      data='닉네임'
                      name='nickname'
                    />
                  </>
                )}
              </S.Inputs>
            </S.InputBox>
            <S.ButtonBox>
              <S.DeleteImage onClick={handleDeleteImage}>이미지 삭제</S.DeleteImage>
              <S.Submit type='submit' value={'저장'} null={profileButton} disabled={!!profileButton} />
            </S.ButtonBox>
          </S.Box>

          <S.Box onSubmit={handleSubmit2(onSubmit2)}>
            <S.BoxTitle>비밀번호 변경</S.BoxTitle>
            <S.InputBox>
              <S.Inputs>
                <Input
                  hookform={register2('password')}
                  title='현재 비밀번호'
                  placeholder='현재 비밀번호 입력'
                  data='password'
                  name='password'
                />
                <Input
                  hookform={register2('newPassword')}
                  title='새 비밀번호'
                  placeholder='새 비밀번호 입력'
                  data='password'
                  name='newPassword'
                  handleBlur={handleNewPasswordBlur}
                />
                <Input
                  hookform={register2('newPasswordCheck')}
                  title='새 비밀번호 확인'
                  placeholder='새 비밀번호 입력'
                  data='password'
                  errorMessage={PasswordWrong}
                  name='newPasswordCheck'
                  handleBlur={handleNewPasswordBlur}
                />
              </S.Inputs>
            </S.InputBox>
            <S.Submit type='submit' value='변경' null={passwordButton} disabled={!!passwordButton} />
          </S.Box>
        </S.MyPage>
      </S.MypageWrapper>
    </S.Wrap>
  );
}

export default MyPage;

const S = {
  Wrap: styled.div`
    display: flex;
  `,
  MypageWrapper: styled.div`
    flex-grow: 1;
  `,
  MyPage: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${({ theme }) => theme.color.gray_FAFAFA};
    gap: 1.2rem;
  `,
  Back: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    cursor: pointer;
  `,
  Box: styled.form`
    width: 100%;
    max-width: 62rem;
    padding: 3.2rem 2.8rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.color.white_FFFFFF};
  `,
  BoxTitle: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    @media ${mediaBreakpoint.tablet} {
      font-size: 2.4rem;
    }
    @media ${mediaBreakpoint.pc} {
      font-size: 2.4rem;
    }
  `,
  BoxImage: styled.div`
    width: 10rem;
    height: 10rem;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    display: table;
    @media ${mediaBreakpoint.tablet} {
      width: 18.2rem;
      height: 18.2rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 18.2rem;
      height: 18.2rem;
    }
  `,
  ChangeImage: styled.div`
    width: 10rem;
    height: 10rem;
    position: relative;
    &:hover label {
      display: block;
    }
    input[type='file'] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
    @media ${mediaBreakpoint.tablet} {
      width: 18.2rem;
      height: 18.2rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 18.2rem;
      height: 18.2rem;
    }
  `,
  ChangeImageInner: styled.label`
    width: 10rem;
    height: 10rem;
    position: relative;
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    display: none;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      width: 18.2rem;
      height: 18.2rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 18.2rem;
      height: 18.2rem;
    }
  `,
  ImageEdit: styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  ButtonBox: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Submit: styled.input<{ null: boolean }>`
    width: 8.4rem;
    height: 3.2rem;
    border-radius: 4px;
    background: ${(props) => (props.null ? 'var(--gray-9FA6B2, #9fa6b2)' : 'var(--violet-5534DA, #5534DA)')};
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-size: 1.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    cursor: pointer;
    display: block;
    border: none;
    margin: 3.2rem 0 0 auto;
  `,
  DeleteImage: styled.div`
    width: 8.4rem;
    height: 3.2rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.color.violet_5534DA};
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-size: 1.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    cursor: pointer;
    display: block;
    border: none;
  `,
  InputBox: styled.div`
    display: flex;
    gap: 1.6rem;
    @media all and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  Inputs: styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 1.6rem;
  `,
  passwordErrorText: styled.div`
    color: ${({ theme }) => theme.color.white_FFFFFF};
  `,
};
