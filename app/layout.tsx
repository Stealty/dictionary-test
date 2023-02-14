'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from 'src/store/modules/configureStore';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

const theme = extendTheme({ config });

/* eslint-disable @next/next/no-head-element */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>V_Dictionary</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </head>
      <body>
        <Provider store={store}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </Provider>
      </body>
    </html>
  );
}
