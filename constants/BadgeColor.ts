export type BadgeColors = keyof BadgeColorType;

interface ColorProperties {
  background: string;
  text: string;
}

interface BadgeColorType {
  [name: string]: ColorProperties;
}

export const BadgeColor: BadgeColorType = {
  orange: {
    background: '#F9EEE3',
    text: '#D58D49',
  },
  green: {
    background: '#E7F7DB',
    text: '#86D549',
  },
  red: {
    background: '#F7DBF0',
    text: '#D549B6',
  },
  blue: {
    background: '#DBE6F7',
    text: '#4981D5',
  },
};
