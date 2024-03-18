import PageTurnerProvider from './provider/PageTurnerProvider';
import ButtonContainer from './ui/ButtonContainer';
import CurrentPageDescriber from './ui/CurrentPageDescriber';
import PaginationLeftButton from './ui/PaginationLeftButton';
import PaginationRightButton from './ui/PaginationRightButton';
import Wrapper from './ui/Wrapper';

export const PageTurner = Object.assign(PageTurnerProvider, {
  Wrapper,
  CurrentPageDescriber,
  ButtonContainer,
  LeftButton: PaginationLeftButton,
  RightButton: PaginationRightButton,
});
