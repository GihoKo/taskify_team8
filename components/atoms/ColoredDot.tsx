import styled from 'styled-components';

interface ColoredDotProps {
  color: string;
}

export default function ColoredDot({ color }: ColoredDotProps) {
  return <S.ColoredDot $color={color} />;
}

const S = {
  ColoredDot: styled.div<{ $color: string }>`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${({ theme, $color }) => $color || theme.color.gray_787486};
  `,
};
