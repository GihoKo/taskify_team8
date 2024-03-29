'use client';

import { FunctionComponent, PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { getAccessToken } from '@utils/token/getAccessToken';

import { useUserStore } from '@store/store/userStore';

/**
 * Authentication HOC
 */
const withAuth = (Component: FunctionComponent<PropsWithChildren>) => {
  const ProtectedComponent = (props: PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { resetUser, getUser } = useUserStore(({ resetUser, getUser }) => ({
      resetUser,
      getUser,
    }));
    const router = useRouter();

    const checkIsAuthenticated = useCallback(async () => {
      const accessToken = getAccessToken();

      if (!accessToken) {
        console.log('client');
        resetUser();
        router.replace('/signin');

        return;
      }

      const user = await getUser();

      if (user.id) {
        setIsAuthenticated(true);
      }
    }, [router, resetUser, getUser]);

    useEffect(() => {
      checkIsAuthenticated();
    }, [checkIsAuthenticated]);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;
