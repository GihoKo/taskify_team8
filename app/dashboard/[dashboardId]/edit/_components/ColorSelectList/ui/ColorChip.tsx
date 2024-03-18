'use client';

import { ButtonHTMLAttributes, MouseEvent, useEffect } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import { Color } from '@interface/style';
import checkedIcon from '@public/images/icons/check-filledWhite-w24-h24.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useColorSelectListContext } from '../hooks/useColorSelectListContext';

interface ColorChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /**
   * custom onClick handler
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  chipColor: Color;
  selected?: boolean;
}

const ColorChip = ({ chipColor, onClick, selected }: ColorChipProps) => {
  const { setSelectedColor, selectedColor } = useColorSelectListContext();

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedColor(chipColor);

    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  useEffect(() => {
    if (selected) {
      setSelectedColor(chipColor);
    }
  }, []);

  const isSelected = selectedColor === chipColor;

  return (
    <S.SelectButton $isSelected={isSelected} type='button' $chipColor={chipColor} onClick={handleOnClick}>
      <S.ImageBox $isSelected={isSelected}>
        <S.CheckImage alt='색상 선택완료 표시 아이콘' sizes='100vw' fill src={checkedIcon} />
      </S.ImageBox>
    </S.SelectButton>
  );
};

export default ColorChip;

const S = {
  SelectButton: styled.button<{ $chipColor: Color; $isSelected?: boolean }>`
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.3rem;
    border: none;

    display: ${({ $isSelected }) => ($isSelected ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ $chipColor }) => $chipColor};
    cursor: pointer;

    @media ${mediaBreakpoint.tablet} {
      display: flex;

      width: 3rem;
      height: 3rem;
    }

    @media ${mediaBreakpoint.pc} {
      display: flex;
    }
  `,

  ImageBox: styled.div<{ $isSelected?: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;

    display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
  `,

  CheckImage: styled(Image)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
