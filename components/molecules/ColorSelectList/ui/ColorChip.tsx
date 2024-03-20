'use client';

import { ButtonHTMLAttributes, MouseEvent, useEffect } from 'react';

import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Color, ResponsiveBooleanUtility } from '@interface/style';
import checkedIcon from '@public/images/icons/check-filledWhite-w24-h24.svg';
import { mediaBreakpoint } from '@styles/mediaBreakpoint';

import { useColorSelectListContext } from '../hooks/useColorSelectListContext';

interface StyledSelectedButtonProps {
  $chipColor: Color;
  $isSelected?: boolean;
  $shouldShowSelectedColorChipOnly?: ResponsiveBooleanUtility;
}

interface ColorChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /**
   * custom onClick handler
   */
  onClick?: ({ event, selectedColor }: { event?: MouseEvent<HTMLButtonElement>; selectedColor: Color }) => void;
  /**
   * chip에 부여되는 색상
   */
  chipColor: Color;
  /**
   * 선택된 색상인지 여부
   */
  selected?: boolean;
}

const ColorChip = ({ chipColor, onClick, selected }: ColorChipProps) => {
  const { setSelectedColor, selectedColor, shouldShowSelectedColorChipOnly } = useColorSelectListContext();

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedColor(chipColor);

    if (typeof onClick === 'function') {
      onClick({ event, selectedColor: chipColor });
    }
  };

  useEffect(() => {
    if (selected) {
      setSelectedColor(chipColor);
    }
  }, []);

  const isSelected = selectedColor === chipColor;

  return (
    <S.SelectButton
      $isSelected={isSelected}
      $shouldShowSelectedColorChipOnly={shouldShowSelectedColorChipOnly}
      type='button'
      $chipColor={chipColor}
      onClick={handleOnClick}
    >
      <S.ImageBox $isSelected={isSelected}>
        <S.CheckImage alt='색상 선택완료 표시 아이콘' sizes='100vw' fill src={checkedIcon} />
      </S.ImageBox>
    </S.SelectButton>
  );
};

export default ColorChip;

const display = css<Omit<StyledSelectedButtonProps, '$chipColor'>>`
  ${({ $isSelected, $shouldShowSelectedColorChipOnly }) => {
    if (!$shouldShowSelectedColorChipOnly) {
      return css`
        display: flex;
      `;
    }

    if ($shouldShowSelectedColorChipOnly === true) {
      return css`
        display: ${$isSelected ? 'flex' : 'none'};
      `;
    }

    if ($isSelected) {
      return css`
        display: flex;
      `;
    }

    if (!$isSelected) {
      return css`
        display: ${$shouldShowSelectedColorChipOnly.onMobile ? 'none' : 'flex'};

        @media ${mediaBreakpoint.tablet} {
          display: ${$shouldShowSelectedColorChipOnly.onTablet ? 'none' : 'flex'};
        }

        @media ${mediaBreakpoint.pc} {
          display: ${$shouldShowSelectedColorChipOnly.onPc ? 'none' : 'flex'};
        }
      `;
    }
  }};
`;

const S = {
  SelectButton: styled.button<StyledSelectedButtonProps>`
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.3rem;
    border: none;

    ${display}
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ $chipColor }) => $chipColor};
    cursor: pointer;

    @media ${mediaBreakpoint.tablet} {
      width: 3rem;
      height: 3rem;
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
