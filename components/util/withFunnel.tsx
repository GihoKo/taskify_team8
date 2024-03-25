'use client';

import React, { FC } from 'react';

import { usePathname } from 'next/navigation';

import { returnBasedOnPathName } from './returnBasedOnPathName';

export type CallableMappedComponent = (pathName: string) => React.ReactElement;

export interface ComponentMappedToPath {
  path: string | string[] | RegExp;
  component: CallableMappedComponent | React.ReactElement | null;
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

    const returnedComponent = returnBasedOnPathName(componentListMappedToPath, pathName);

    if (returnedComponent) {
      return returnedComponent;
    }

    return <FunnelConsumer {...(rest as T)} />;
  };

  return WrappedComponent;
};

export default withFunnel;
