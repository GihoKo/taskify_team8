import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { ACCESS_TOKEN } from '@constants/token';

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware가 시작되었습니다.');
  const accessToken = cookies().get(ACCESS_TOKEN)?.value;

  if (!accessToken) {
    console.log('accessToken이 없습니다.');
    // @see URL second argument https://nodejs.org/api/url.html#new-urlinput-base
    // @see Conditional Statements https://nextjs.org/docs/app/building-your-application/routing/middleware#conditional-statements
    const signPage = new URL('/signin', request.nextUrl.origin);

    return NextResponse.redirect(signPage);
  }
}

// Good to know: The matcher values need to be constants so they can be statically analyzed at build-time. Dynamic values such as variables will be ignored.
// @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// configured matchers: 부분 보면 쉽게 이해 가능
export const config = {
  matcher: ['/dashboard/:dashboardId*', '/mydashboard', '/mypage'],
};
