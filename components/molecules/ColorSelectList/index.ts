import ColorSelectListProvider from './provider/ColorSelectListProvider';
import ColorChip from './ui/ColorChip';
import Container from './ui/Container';

const ColorSelectList = Object.assign(ColorSelectListProvider, {
  Container,
  ColorChip,
});

export default ColorSelectList;
