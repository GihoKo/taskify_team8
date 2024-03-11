import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/utils/registry';
import type {} from 'styled-components/cssprop';

import { Modal, ModalProvider } from '@hooks/use-modal';

import type { Metadata } from 'next';

import '@/styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ModalProvider>
            {children}
            <div id='modal' />
            <Modal />
          </ModalProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
