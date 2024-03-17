'use client';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // 페이지 넘길 때 참고해주세요!! next/router 쓰면 안됩니당
import styled from 'styled-components';

import axios from '@apis/axios';

import Input from '@components/molecules/Input';

import ModalCheckIt from './_components/ModalCheckIt';
import useModalToggle from './_hooks/useModal';

interface Inputs {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}
function SignUp() {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false); // 회원가입 성공
  const [isModalOpen, openModal, toggleModal] = useModalToggle(false); // 회원가입 실패
  const [isChecked, setIsChecked] = useState<boolean>(false); // 이용약관 체크
  const [emailError, setemailError] = useState<boolean>(false); // 각종 에러 문구
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordCheckError, setPasswordCheckError] = useState<boolean>(false);
  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const signupData = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
    };
    handleSubmits(signupData);
  };

  const email = watch('email');
  const nickname = watch('nickname');
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  // 이용약관 체크 확인
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // 회원가입 실행
  const handleSubmits = async (data: { email: string; nickname: string; password: string }) => {
    try {
      if (isChecked && !emailError && !passwordCheckError && !nicknameError) {
        const response = await axios.post('users', data);

        if (response.status === 201) {
          setShowSuccessModal(true);
          router.push('/login');
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        openModal();
      } else {
        console.error('회원가입 요청 오류!', error);
      }
    }
  };

  const handleModalToggle = () => {
    toggleModal();
  };

  // 유효성검사 true 나오게끔
  const validateEmail = (email: string) => {
    const isvalidateEmail = /\S+@\S+\.\S+/.test(email);
    setemailError(!isvalidateEmail);
  };

  const validatePassword = (password: string) => {
    const isvalidatePassword = password?.length >= 8;
    setPasswordError(!isvalidatePassword);
  };

  const validatePasswordCheck = (passwordCheck: string, password: string) => {
    const isvalidatePasswordCheck = password === passwordCheck;
    setPasswordCheckError(!isvalidatePasswordCheck);
  };

  const validateNickname = (nickname: string) => {
    const isvalidateNickname = nickname?.length <= 10 && nickname?.length !== 0;
    setNicknameError(!isvalidateNickname);
  };

  useEffect(() => {
    if (email !== '') {
      validateEmail(email);
    } else if (email === '') {
      setemailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (nickname !== '') {
      validateNickname(nickname);
    } else if (nickname === '') {
      setNicknameError(false);
    }
  }, [nickname]);

  useEffect(() => {
    if (password !== '') {
      validatePassword(password);
    } else if (password === '') {
      setPasswordError(false);
    }
  }, [password]);

  useEffect(() => {
    if (passwordCheck !== '') {
      validatePasswordCheck(passwordCheck, password);
    } else if (passwordCheck === '') {
      setPasswordCheckError(false);
    }
  }, [passwordCheck, password]);

  // foucs out
  const handleBlur = (field: string) => {
    return () => {
      switch (field) {
        case 'email':
          validateEmail(email);
          break;
        case 'nickname':
          validateNickname(nickname);
          break;
        case 'password':
          validatePassword(password);
          break;
        case 'passwordCheck':
          validatePasswordCheck(passwordCheck, password);
          break;
        default:
          break;
      }
    };
  };

  // foucs in
  const handleFocus = (field: string) => {
    return () => {
      switch (field) {
        case 'email':
          setemailError(false);
          break;
        case 'nickname':
          setNicknameError(false);
          break;
        case 'password':
          setPasswordError(false);
          break;
        case 'passwordCheck':
          setPasswordCheckError(false);
          break;
        default:
          break;
      }
    };
  };

  // 에러메세지가 없고 모든값이 빈값이 아닐때 버튼 활성화
  const lastCheck =
    isChecked &&
    !emailError &&
    !nicknameError &&
    !passwordError &&
    !passwordCheckError &&
    email !== '' &&
    password !== '' &&
    nickname !== '' &&
    passwordCheck === password;

  return (
    <>
      {showSuccessModal && <ModalCheckIt text='가입이 완료되었습니다!' submitButton='확인' wrong={handleModalToggle} />}
      {isModalOpen && (
        <ModalCheckIt text='이미 사용 중인 이메일입니다.' submitButton='확인' wrong={handleModalToggle} />
      )}
      <S.Container>
        <S.Logo>
          <Link href={'/'}>
            <Image src='/images/icons/logoLogin.svg' alt='로고' fill />
          </Link>
        </S.Logo>
        <S.Text>첫 방문을 환영합니다!</S.Text>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            hookform={register('email', { pattern: /\S+@\S+\.\S+/ })}
            data='이메일'
            title='이메일'
            placeholder='이메일을 입력해 주세요'
            wrong={emailError}
            name='email'
            handleFocus={handleFocus('email')}
            handleBlur={handleBlur('email')}
          />
          <Input
            hookform={register('nickname')}
            data='닉네임'
            title='닉네임'
            placeholder='닉네임을 입력해 주세요'
            wrong={nicknameError}
            name='nickname'
            handleFocus={handleFocus('nickname')}
            handleBlur={handleBlur('nickname')}
          />
          <Input
            hookform={register('password')}
            title='비밀번호'
            placeholder='8자 이상 입력해 주세요'
            data='pwd'
            wrong={passwordError}
            name='password'
            handleFocus={handleFocus('password')}
            handleBlur={handleBlur('password')}
          />
          <Input
            hookform={register('passwordCheck')}
            title='비밀번호확인'
            placeholder='비밀번호를 한번 더 입력해 주세요'
            data='pwd'
            wrong={passwordCheckError}
            name='passwordCheck'
            handleFocus={handleFocus('passwordCheck')}
            handleBlur={handleBlur('passwordCheck')}
          />
          <S.CheckBox>
            <S.CheckInput type='checkbox' id='agree' name='agree' onChange={handleCheckBoxChange} />
            <S.Label htmlFor='agree'>이용약관에 동의합니다</S.Label>
          </S.CheckBox>
          {lastCheck ? <S.Button type='submit'>가입하기</S.Button> : <S.NoneButton>가입하기</S.NoneButton>}
          <S.Logintext>
            이미 가입하셨나요?
            <S.LinkLogin>
              <Link href={'/signin'}>로그인하기</Link>
            </S.LinkLogin>
          </S.Logintext>
        </S.Form>
      </S.Container>
    </>
  );
}

export default SignUp;

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 1rem;
  `,
  Signupback: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Container: styled.div`
    width: 100%;
    max-width: 52rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  Logo: styled.div`
    position: relative;
    margin: 1rem auto;
    width: 20rem;
    height: 27.9rem;

    @media (max-width: 767px) {
      margin: 30rem auto 0.8rem;
    }
  `,
  Text: styled.p`
    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 3.8rem;
  `,
  CheckBox: styled.div`
    align-items: center;
    display: flex;
    gap: 0.8rem;
  `,
  CheckInput: styled.input`
    width: 2rem;
    height: 2rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9D9D9};
  `,
  NoneButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.gray_9FA6B2};
    color: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.8rem;
    font-weight: 500;

    @media (max-width: 767px) {
      height: 5rem;
      gap: 1rem;
    }
  `,
  Button: styled.button`
    width: 100%;
    height: 5rem;
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.violet_5534DA};
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;

    @media (max-width: 767px) {
      height: 5rem;
      gap: 1rem;
    }
  `,
  Logintext: styled.div`
    display: flex;
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.6rem;
    gap: 1rem;
  `,
  LinkLogin: styled.p`
    color: ${({ theme }) => theme.color.violet_5534DA};
    text-decoration-line: underline;
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.color.black_333236};
    font-size: 1.6rem;
    font-weight: 400;
  `,
};
