import { FieldErrors, FieldValues, useFormContext, UseFormRegister } from 'react-hook-form';

import {
  EMAIL_STANDARD,
  ERROR_EMAIL_CHECK,
  ERROR_EMAIL_EMPTY,
  ERROR_NICKNAME_CHECK,
  ERROR_NICKNAME_EMPTY,
  ERROR_PASSWORD_CHECK,
  ERROR_PASSWORD_CURRENT,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_SECOND_EMPTY,
  ERROR_PASSWORD_VALIDATION,
  NICKNAME_STANDARD,
  PASSWORD_STANDARD,
} from '@constants/auth';

interface SignFormValuesType {
  email?: string;
  password?: string;
  nickname?: string;
  passwordCheck?: string;
  checkbox?: boolean;
  currentPassword?: string;
  newPassword?: string;
  newPasswordCheck?: string;
}

interface AuthInput {
  register: UseFormRegister<SignFormValuesType>;
  errors: FieldErrors<FieldValues>;
  rules: {
    required?: string;
    pattern: {
      value: RegExp;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
  };
}

function useAuthInput(type: string): AuthInput {
  const matchInput = authInput.find((input) => input.type === type);

  const {
    register,
    formState: { errors },
  } = useFormContext<SignFormValuesType>();

  const required = matchInput?.required;

  const pattern = {
    value: matchInput?.pattern?.value as RegExp,
    message: matchInput?.pattern?.message as string,
  };

  const minLength = {
    value: matchInput?.minLength?.value as number,
    message: matchInput?.minLength?.message as string,
  };

  const rules = {
    required,
    pattern,
    minLength,
  };

  return { rules, register, errors };
}

export default useAuthInput;

const authInput = [
  {
    type: 'email',
    required: ERROR_EMAIL_EMPTY,
    pattern: { value: EMAIL_STANDARD, message: ERROR_EMAIL_CHECK },
  },
  {
    type: 'password',
    required: ERROR_PASSWORD_EMPTY,
    minLength: { value: 8, message: ERROR_PASSWORD_VALIDATION },
  },
  {
    type: 'passwordCheck',
    required: ERROR_PASSWORD_SECOND_EMPTY,
    validate: ERROR_PASSWORD_CHECK,
  },
  {
    type: 'nickname',
    required: ERROR_NICKNAME_EMPTY,
    pattern: { value: NICKNAME_STANDARD, message: ERROR_NICKNAME_CHECK },
  },
  {
    type: 'checkbox',
  },
  {
    type: 'currentPassword',
    required: '현재 비밀번호 입력',
    // TODO: 로직 추가
    validate: ERROR_PASSWORD_CURRENT,
  },
  {
    type: 'newPassword',
    required: '새 비밀번호 입력',
    pattern: { value: PASSWORD_STANDARD, message: ERROR_PASSWORD_VALIDATION },
    maxLength: { value: 8, message: ERROR_PASSWORD_VALIDATION },
  },
  {
    type: 'newPasswordCheck',
    required: '새 비밀번호 입력',
    validate: ERROR_PASSWORD_CHECK,
  },
];
