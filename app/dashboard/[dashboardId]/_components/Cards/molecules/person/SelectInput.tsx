import React, { SyntheticEvent, useEffect, useState } from 'react';

import { styled } from 'styled-components';

import ArrowDown from '@public/images/icons/arrow-drop-down-filledBlack-w26-h26.svg?component';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import ProfileImage from '@components/atoms/ProfileImage';

import checkCardSelectInput from './CheckSelectInput';
import TextLabel from '../../atoms/TextInputLabel';

interface CardSelectInputProps {
  id: string;
  register: any;
  errors: any;
  watch: any;
  setError: any;
  options: any;
  setValue?: any;
  assignedMemberId: number | null;
  setAssignedMemberId: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectInput({
  id,
  register,
  errors,
  setError,
  watch,
  options,
  setValue,
  assignedMemberId,
  setAssignedMemberId,
}: CardSelectInputProps): JSX.Element {
  const { isError } = checkCardSelectInput(errors, watch, setError);
  const [isListOpen, setIsListOpen] = useState(false);
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    setInitialList(options);
  }, [options]);

  const handleClickButton = (event: SyntheticEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsListOpen(!isListOpen);
  };

  const handleClickListItem = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    const id = event.target.value;
    setAssignedMemberId(id);
    setIsListOpen(!isListOpen);
    setValue('person', options.find((option: any) => option.userId === id).nickname || null);
  };

  const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const searchInput: string = event.target.value;
    setAssignedMemberId(null);
    setIsListOpen(true);
    const filteredList = options.filter((option: { nickname: string }) => {
      const item = option.nickname.toLowerCase();

      return item.includes(searchInput.toLowerCase());
    });
    setInitialList(filteredList);
  };

  useEffect(() => {
    if (!isListOpen && assignedMemberId === null) {
      setValue('person', null);
    }
  }, [isListOpen]);

  return (
    <>
      <S.CardsInputWrapper>
        <TextLabel id={id} inputTitle='담당자' />
        <S.PositioningWrapper>
          <S.InputWrapper>
            <S.Input
              id={id}
              type='text'
              placeholder='이름을 입력해 주세요'
              $isError={isError}
              {...register(id, {
                required: '담당자를 필수로 지정해야합니다.',
              })}
              onChange={handleInputChange}
              watch
            />
            <S.ArrowDown onClick={handleClickButton} />
          </S.InputWrapper>

          {isListOpen ? (
            <S.UserList onBlur={() => setIsListOpen(false)}>
              {initialList.map((item: any) => (
                <S.UserListItem
                  key={item.id}
                  value={item.userId}
                  $isSelected={item.userId === assignedMemberId}
                  onClick={handleClickListItem}
                >
                  <ProfileImage defaultName={item.nickname} imgUrl={item.profileImageUrl || null} />

                  {item.nickname}
                </S.UserListItem>
              ))}
            </S.UserList>
          ) : null}
        </S.PositioningWrapper>
      </S.CardsInputWrapper>
    </>
  );
}

const S = {
  CardsInputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    @media ${mediaBreakpoint.tablet} {
      margin-bottom: 3.2rem;
    }
  `,
  ImageWrapper: styled.div`
    position: relative;
    width: 2rem;
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.color.gray_9B9B9B};
    border-radius: 100%;
  `,
  PositioningWrapper: styled.div`
    position: relative;
    width: fit-content;
  `,

  UserList: styled.ul`
    position: absolute;
    border: 0.1rem solid ${({ theme }) => theme.color.gray_EEEEEE};
    background-color: ${({ theme }) => theme.color.white_FFFFFF};
    z-index: 2;
    height: 2rem;
    overflow-y: scroll;
    height: 20rem;
    width: 100%;
  `,

  UserListItem: styled.li<{ $isSelected: boolean }>`
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    gap: 1rem;

    background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.color.purple_760DDE : 'none')};

    &:hover {
      background-color: ${({ theme }) => theme.color.violet_F1EFFD};
    }
  `,
  InputWrapper: styled.div`
    position: relative;
    width: fit-content;
    display: flex;
    align-items: center;
  `,
  Input: styled.input<{ $isError: boolean }>`
    color: ${({ theme }) => theme.color.black_333236};
    border: 0.1rem solid
      ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.gray_D9D9D9)};
    border-radius: 0.6rem;
    font-size: 1.4rem;
    /* width: 28.7rem; */
    height: 4.2rem;
    padding: 0 1.6rem;

    @media ${mediaBreakpoint.tablet} {
      font-size: 1.6rem;
      /* width: 48.4rem; */
      height: 4.8rem;
      margin-bottom: 0.8rem;
    }

    &:focus {
      outline: none;
      /* border: 0.1rem solid ${({ theme }) => theme.color.violet_5534DA}; */
      border: 0.1rem solid
        ${({ theme, $isError }) => ($isError === true ? theme.color.red_D6173A : theme.color.violet_5534DA)};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
      font-size: 1.4rem;

      @media ${mediaBreakpoint.tablet} {
        font-size: 1.6rem;
      }
    }
  `,
  ArrowDown: styled(ArrowDown)`
    position: absolute;
    right: 1rem;
    cursor: pointer;
  `,
};
