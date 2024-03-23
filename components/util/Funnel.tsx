'use client';

import { usePathname } from 'next/navigation';

export interface ComponentMappedToPath {
  path: string;
  component: React.ReactElement;
}

export interface ComponentListMappedToPath {
  componentListMappedToPath: ComponentMappedToPath[];
}

interface FunnelProps extends ComponentListMappedToPath {
  /**
   * fallback component
   */
  children: React.ReactNode;
}

const Funnel = ({ componentListMappedToPath, children }: FunnelProps) => {
  const pathName = usePathname();

  for (const { path, component } of componentListMappedToPath) {
    if (pathName === path) {
      return <>{component}</>;
    }
  }

  return <>{children}</>;
};

export default Funnel;
