import { DropPrimitiveTypeFromResponsiveStyleUtility, MobileFirstResponsiveUtility } from '@interface/style';

export const sidebarWidth: DropPrimitiveTypeFromResponsiveStyleUtility<MobileFirstResponsiveUtility<string>> = {
  onMobile: '6.7rem',
  onTablet: '16rem',
  onPc: '30rem',
};
