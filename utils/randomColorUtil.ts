export function generateRandomColorPair(): string[] {
  // 임의의 16진수 코드를 생성
  const backgroundColor = generateRandomHexCode();

  // 텍스트 색상을 배경색과 대비되도록 생성
  const textColor = generateTextColor(backgroundColor);

  return [backgroundColor, textColor];
}

function generateRandomHexCode(): string {
  // 0부터 16777215(FFFFFF의 10진수 표현) 사이의 임의의 정수를 생성
  const randomInt = Math.floor(Math.random() * 16777215);

  // 정수를 16진수로 변환하여 문자열로 반환
  return `#${randomInt.toString(16).padStart(6, '0')}`;
}

function generateTextColor(background: string): string {
  // 주어진 배경색을 RGB로 변환
  const backgroundRgb = hexToRgb(background);

  // 보다 진한 색조를 선택하여 텍스트 색상으로 사용
  return darkenColor(backgroundRgb, 0.2); // 예시로 20% 어둡게 만듦
}

function hexToRgb(hex: string): number[] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => {
    const hex = c.toString(16);

    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function darkenColor(rgb: number[], factor: number): string {
  return rgbToHex(
    Math.max(0, Math.min(255, Math.round(rgb[0] * (1 - factor)))),
    Math.max(0, Math.min(255, Math.round(rgb[1] * (1 - factor)))),
    Math.max(0, Math.min(255, Math.round(rgb[2] * (1 - factor)))),
  );
}
