'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type TPotalProps = PropsWithChildren;

const Portal = ({ children }: TPotalProps) => {
  return ReactDOM.createPortal(children, document.getElementById('modal')!);
};

const PortalContainer = ({ children }: TPotalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted ? <Portal>{children}</Portal> : null;
};

export default PortalContainer;
