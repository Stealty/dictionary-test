'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: false,
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
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
