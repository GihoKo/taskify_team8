'use client';

import { usePathname } from 'next/navigation';

import { Obj, TransformOptionalToNonNullableProps } from '@interface/util';

import { ComponentListMappedToPath } from './Funnel';

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

  for (const { path, component } of componentListMappedToPath) {
    if (pathName === path) {
      return <>{component}</>;
    }
  }

  for (const key in condition) {
    if (condition[key] === undefined || condition[key] === null || condition[key] === '') {
      return <>{children(condition)}</>;
    }
  }

  return <>{children(condition)}</>;
};

export default NonNullableFunnel;
