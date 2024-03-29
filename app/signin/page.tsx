'use client';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { getUserData, loginUser } from '@apis/sign/axiosSignIn';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import Input from '@components/molecules/Input';
import ModalCheckIt from '@components/molecules/ModalCheckIt';

import { getAccessToken } from '@utils/token/getAccessToken';
import { setAccessToken } from '@utils/token/setAccessToken';

import { useUserStore } from '@store/store/userStore';

import useToggle from './_hooks/useToggle';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const { setUser } = useUserStore();
  const [emailError, setEmailError] = useState<boolean>(false); // 각종 에러 문구
  const [passwordError, setPasswordError] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPasswordError, setShowPasswordError, showPasswordToggle] = useToggle(false);

  const { register, handleSubmit, watch } = useForm<IFormInput>();

  const email = watch('email');
  const password = watch('password');

  const onSubmit: SubmitHandler<IFormInput> = (data: { email: string; password: string }) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    login(loginData);
  };

  const router = useRouter();
  useEffect(() => {
    const AccessToken = getAccessToken();

    if (AccessToken !== null) {
      router.push(`/mydashboard`);
    }
  }, [router]);

  async function login(data: { email: string; password: string }) {
    try {
      const accessToken = await loginUser(data);
      setAccessToken(accessToken);

      await setUserData();
      router.push('/mydashboard');
    } catch (error) {
      setPasswordError(true);

      if (data.email !== '' && data.password !== '') {
        showPasswordToggle();
      }

      console.error('로그인 실패:', error);
    }
  }

  const setUserData = async () => {
    try {
      const userData = await getUserData();
      setUser(userData);
    } catch (error) {
      console.error('사용자 정보 가져오기 실패:', error);
    }
  };

  const validateEmail = (email: string) => {
    const isvalidateEmail = /\S+@\S+\.\S+/.test(email);
    setEmailError(!isvalidateEmail);
  };

  const validatePassword = (password: string) => {
    const isvalidatePassword = password?.length >= 8;
    setPasswordError(!isvalidatePassword);
  };

  useEffect(() => {
    if (email !== '') {
      validateEmail(email);
    } else if (email === '') {
      setEmailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (password !== '') {
      validatePassword(password);
    } else if (password === '') {
      setPasswordError(false);
    }
  }, [password]);

  const handleBlur = (field: string) => {
    return () => {
      switch (field) {
        case 'email':
          validateEmail(email);
          break;
        case 'password':
          validatePassword(password);
          break;
        default:
          break;
      }
    };
  };

  const handleFocus = (field: string) => {
    return () => {
      switch (field) {
        case 'email':
          setEmailError(false);
          break;
        case 'password':
          setPasswordError(false);
          break;
        default:
          break;
      }
    };
  };

  const lastCheck = !emailError && !passwordError && email !== '' && password !== '';

  return (
    <>
      {showPasswordError && (
        <ModalCheckIt text='비밀번호가 일치하지 않습니다.' submitButtonText='확인' errorMessage={showPasswordToggle} />
      )}
      <S.Signinback>
        <S.Signin>
          <S.LogoWrap>
            <S.Logo>
              <Link href={'/'}>
                <Image src={'/images/icons/logoLogin-filledViolet_5544DA-200w-279h.svg'} alt='로고' fill />
              </Link>
            </S.Logo>
            <p>오늘도 만나서 반가워요!</p>
          </S.LogoWrap>

          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              hookform={register('email', { pattern: /\S+@\S+\.\S+/ })}
              title='이메일'
              placeholder='이메일을 입력해 주세요'
              data='이메일'
              errorMessage={emailError}
              name='email'
              handleFocus={handleFocus('email')}
              handleBlur={handleBlur('email')}
            />
            <Input
              hookform={register('password')}
              title='비밀번호'
              placeholder='비밀번호를 입력해 주세요'
              data='password'
              errorMessage={passwordError}
              name='password'
              handleFocus={handleFocus('password')}
              handleBlur={handleBlur('password')}
            />

            {lastCheck ? <S.Button type='submit'>로그인</S.Button> : <S.NoneButton>로그인</S.NoneButton>}
          </S.LoginForm>
          <S.Signup>
            회원이 아니신가요?
            <span>
              <Link href={'/signup'}>회원가입하기</Link>
            </span>
          </S.Signup>
        </S.Signin>
      </S.Signinback>
    </>
  );
}

const S = {
  Signinback: styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    background: ${({ theme }) => theme.color.gray_FAFAFA};
  `,
  Signin: styled.div`
    width: 100%;
    max-width: 52rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  LogoWrap: styled.div`
    margin-bottom: 3.8rem;
    text-align: center;
    & p {
      color: ${({ theme }) => theme.color.black_333236};
      font-size: 2rem;
      font-weight: 500;
      margin-top: 1rem;
    }
  `,
  NoneButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35.1rem;
    height: 5rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.gray_9FA6B2};
    color: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.8rem;
    font-weight: 500;

    @media ${mediaBreakpoint.tablet} {
      width: 52rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 52rem;
    }
  `,
  Button: styled.button`
    width: 35.1rem;
    height: 5rem;
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.color.violet_5534DA};
    color: ${({ theme }) => theme.color.white_FFFFFF};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    @media ${mediaBreakpoint.tablet} {
      width: 52rem;
    }
    @media ${mediaBreakpoint.pc} {
      width: 52rem;
    }
  `,
  Logo: styled.div`
    width: 20rem;
    height: 27.9rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    @media all and (max-width: 767px) {
      width: 11.9rem;
      height: 16.5rem;
    }
  `,
  LoginForm: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  `,
  Submit: styled.input`
    display: flex;
    width: 100%;
    max-width: 52rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.color.violet_5534DA};
    color: ${({ theme }) => theme.color.white_FFFFFF};
    font-size: 1.8rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
  `,
  Signup: styled.div`
    color: ${({ theme }) => theme.color.black_333236};
    text-align: center;
    font-size: 1.6rem;
    margin-top: 2.4rem;
    & span {
      color: ${({ theme }) => theme.color.violet_5534DA};
      text-decoration-line: underline;
      margin-left: 0.5rem;
    }
  `,
};
