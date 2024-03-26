'use client';

import { usePathname } from 'next/navigation';

import { Obj, TransformOptionalToNonNullableProps } from '@interface/util';

import { returnBasedOnPathName } from './returnBasedOnPathName';
import { ComponentListMappedToPath } from './withFunnel';

interface NonNullableFunnelProps<T extends Obj>
  extends ComponentListMappedToPath,
    Omit<TransformOptionalToNonNullableProps<T>, 'fallback'> {}

const NonNullableFunnel = <T extends Obj>({
  children,
  condition,
  componentListMappedToPath,
}: NonNullableFunnelProps<T>) => {
  const pathName = usePathname();

  if (typeof condition !== 'object' || condition === null || condition === undefined) {
    return <>{children(condition)}</>;
  }

  const returnedComponent = returnBasedOnPathName(componentListMappedToPath, pathName);

  if (returnedComponent) {
    return returnedComponent;
  }

  for (const key in condition) {
    if (condition[key] === undefined || condition[key] === null || condition[key] === '') {
      return <>{children(condition)}</>;
    }
  }

  return <>{children(condition)}</>;
};

export default NonNullableFunnel;
