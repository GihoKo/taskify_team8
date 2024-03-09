/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      cssProp: true,
      displayName: true,
      ssr: true,
    },
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
export default nextConfig;
