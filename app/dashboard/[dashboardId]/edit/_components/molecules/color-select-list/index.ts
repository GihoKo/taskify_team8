import ColorChip from './ColorChip';
import Container from './Container';
import ColorSelectListProvider from './provider/ColorSelectListProvider';

const ColorSelectList = Object.assign(ColorSelectListProvider, {
  Container,
  ColorChip,
});

export default ColorSelectList;
