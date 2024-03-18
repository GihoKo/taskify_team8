import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import axios from '@apis/axios';

import Input from '@components/molecules/Input';
import ModalCheckIt from '@components/molecules/ModalCheckIt';
import DashboardNav from '@components/organisms/DashboardNav';

import useUserStore from '@store/user';

import useToggle from '../signin/_hooks/useToggle';

// 사이드바 추가 필.

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface IFormInput {
  nickname: string;
  profileImageUrl: string;
}

interface PwdChange {
  password: number;
  newPassword: number;
  newPasswordCheck: number;
}

function MyPage() {
  const { user, setUser } = useUserStore();
  const [currentUser, setCurrentUser] = useState<Member | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('/images/more.svg');
  const [pwdWrong, setPwdWrong] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [profileBtn, setProfileBtn] = useState<boolean>(false);
  const [pwdBtn, setPwdBtn] = useState<boolean>(false);
  const [showPwdError, setShowPwdError, showPwdToggle] = useToggle(false);

  // profile
  const { register: register1, handleSubmit: handleSubmit1, watch: watch1 } = useForm<IFormInput>();

  const onSubmit1: SubmitHandler<IFormInput> = (data: { nickname: string }) => {
    const postData = {
      nickname: data.nickname,
      profileImageUrl: profileValue.profileImageUrl,
    };
    handleChangeProfile(postData);
  };

  // pwd
  const { register: register2, handleSubmit: handleSubmit2, watch: watch2 } = useForm<PwdChange>();

  const onSubmit2: SubmitHandler<PwdChange> = (data: {
    password: number;
    newPassword: number;
    newPasswordCheck: number;
  }) => {
    const pwdValue = {
      password: String(data.password),
      newPassword: String(data.newPassword),
    };

    if (data.newPasswordCheck !== data.newPassword) {
      setPwdWrong(true);
    } else {
      setPwdWrong(false);
      pwdChange(pwdValue);
    }
  };

  const [profileValue, setProfileValue] = useState({
    profileImageUrl: null,
  });

  // watch 사용
  const profile1 = watch1('nickname');
  const profile2 = watch1('profileImageUrl');
  const pwd1 = String(watch2('newPassword'));
  const pwd2 = String(watch2('newPasswordCheck'));
  const pwd3 = String(watch2('password'));
  // watch 사용

  useEffect(() => {
    if (profile1 === user.nickname || profile2 === user.profileImageUrl) {
      setProfileBtn(true);
    } else {
      setProfileBtn(false);
    }
  }, [profile1]);

  useEffect(() => {
    if (pwd1.length === 0 || pwd2.length === 0 || pwd3.length === 0) {
      setPwdBtn(true);
    } else {
      setPwdBtn(false);
    }
  }, [pwd1, pwd2, pwd3]);

  const router = useRouter();

  // -- 이미지 / 닉네임 변경 시작
  const fetchProfileImage = async () => {
    try {
      const response = await axios.get('users/me');

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
  };

  useEffect(() => {
    fetchProfileImage();
  }, []);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(`/users/me/image`, formData, {
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
      const res = await axios.put(`users/me`, data);
      setUser(res.data);

      if (!res.data.profileImageUrl) {
        setPreviewUrl('/images/more.svg');
      } else {
        setPreviewUrl(res.data.profileImageUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file && file.type.startsWith('image/')) {
        const imageUrl = await uploadImage(file);

        if (imageUrl) {
          setProfileValue((prev) => ({
            ...prev,
            profileImageUrl: imageUrl,
          }));

          setPreviewUrl(imageUrl);

          setProfileBtn(false);
        }
      }
    }
  };

  const handleDeleteImg = () => {
    setProfileValue((prev) => ({
      ...prev,
      profileImageUrl: null,
    }));
    setPreviewUrl('/images/more.svg');
  };

  useEffect(() => {
    if (profileValue.profileImageUrl === null) {
      setProfileBtn(false);
    }
  }, [profileValue.profileImageUrl]);

  // -- 이미지 / 닉네임 변경 끝

  // 비밀번호 변경 시작
  const pwdChange = async (data: { password: string; newPassword: string }) => {
    if (!pwdWrong && data.password !== '' && data.newPassword !== '') {
      try {
        const res = await axios.put('/auth/password', data);

        setModalText('비밀번호가 변경 되었습니다');
        showPwdToggle();

        router.push('/mypage');
      } catch (err: any) {
        setModalText(err.response.data.message);
        showPwdToggle();
      }
    }
  };

  // 비밀번호 변경 끝

  const handleNewPasswordBlur = () => {
    const newPassword = pwd1;
    const newPasswordCheck = pwd2;

    if (newPassword !== newPasswordCheck && newPassword !== '' && newPasswordCheck !== '') {
      setPwdWrong(true);
    } else {
      setPwdWrong(false);
    }
  };

  return (
    <S.Wrap>
      {showPwdError && <ModalCheckIt text={modalText} submitButtonText='확인' wrong={showPwdToggle} />}
      <DashboardNav />
      <Sidemenu />
      <S.Mypage>
        <S.Back onClick={() => router.back()}>{'<'} 뒤로가기</S.Back>

        <S.Box onSubmit={handleSubmit1(onSubmit1)}>
          <S.BoxTitle>프로필</S.BoxTitle>
          <S.InputBox>
            <S.BoxImg>
              <Image
                key={previewUrl}
                src={previewUrl}
                alt='이미지 추가'
                fill
                placeholder='blur'
                blurDataURL={'/images/more.svg'}
              />
              <S.ChangeImg>
                <S.ChangeImgInner htmlFor='file'>
                  <S.ImgEdit>
                    <Image src={'/images/imgEdit.svg'} alt='이미지 변경' fill />
                  </S.ImgEdit>
                </S.ChangeImgInner>

                <input
                  {...register1('profileImageUrl')}
                  type='file'
                  name='profileImageUrl'
                  id='file'
                  onChange={handleFileChange}
                />
              </S.ChangeImg>
            </S.BoxImg>
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
          <S.BtnBox>
            <S.DeleteImg onClick={handleDeleteImg}>이미지 삭제</S.DeleteImg>
            <S.Submit type='submit' value={'저장'} null={profileBtn} disabled={!!profileBtn} />
          </S.BtnBox>
        </S.Box>

        <S.Box onSubmit={handleSubmit2(onSubmit2)}>
          <S.BoxTitle>비밀번호 변경</S.BoxTitle>
          <S.InputBox>
            <S.Inputs>
              <Input
                hookform={register2('password')}
                title='현재 비밀번호'
                placeholder='현재 비밀번호 입력'
                data='pwd'
                name='password'
              />
              <Input
                hookform={register2('newPassword')}
                title='새 비밀번호'
                placeholder='새 비밀번호 입력'
                data='pwd'
                name='newPassword'
                handleBlur={handleNewPasswordBlur}
              />
              <Input
                hookform={register2('newPasswordCheck')}
                title='새 비밀번호 확인'
                placeholder='새 비밀번호 입력'
                data='pwd'
                wrong={pwdWrong}
                name='newPasswordCheck'
                handleBlur={handleNewPasswordBlur}
              />
            </S.Inputs>
          </S.InputBox>
          <S.Submit type='submit' value='변경' null={pwdBtn} disabled={!!pwdBtn} />
        </S.Box>
      </S.Mypage>
    </S.Wrap>
  );
}

export default MyPage;

const S = {};
