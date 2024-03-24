import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import '../styles/global.css';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../styles/theme';
import React from 'react';
import { palette } from '../styles/theme';

/* TODO: replace with your own global styles, or remove */
// const GlobalStyles = createGlobalStyle`
//   body {
//     font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
//   }
//   `;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    // actions: {
    //   argTypesRegex: '^on[A-Z].*',
    // }
  },

  decorators: [
    // withThemeFromJSXProvider({
    //   // themes: {
    //   // light: lightTheme,
    //   // dark: darkTheme,
    //   // ...palette,
    //   // },
    //   // defaultTheme: 'light',
    //   // Provider: ThemeProvider,
    //   // GlobalStyles,
    // }),
    (Story, context) => {
      return (
        <ThemeProvider theme={palette}>
          <Story {...context} />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
