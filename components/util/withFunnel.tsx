'use client';

import React, { FC } from 'react';

import { usePathname } from 'next/navigation';

export interface ComponentMappedToPath {
  path: string | string[] | RegExp;
  component: React.ReactElement;
}

export interface ComponentListMappedToPath {
  componentListMappedToPath: ComponentMappedToPath[];
}

interface FunnelProps extends ComponentListMappedToPath {
  /**
   * fallback component
   */
  children?: React.ReactNode;
}

/**
 * Funnel Hoc
 */
const withFunnel = <FunnelConsumerProps,>(FunnelConsumer: FC<FunnelConsumerProps>) => {
  const WrappedComponent = <T extends React.JSX.IntrinsicAttributes & FunnelConsumerProps>({
    componentListMappedToPath,
    ...rest
  }: FunnelProps & T) => {
    const pathName = usePathname();

    for (const { path, component } of componentListMappedToPath) {
      if (path instanceof RegExp) {
        if (path.test(pathName)) {
          return <>{component}</>;
        }
      }

      if (Array.isArray(path)) {
        for (const p of path) {
          if (p === pathName) {
            return <>{component}</>;
          }
        }
      }

      if (typeof path === 'string') {
        if (path === pathName) {
          return <>{component}</>;
        }
      }
    }

    return <FunnelConsumer {...(rest as T)} />;
  };

  return WrappedComponent;
};

export default withFunnel;
