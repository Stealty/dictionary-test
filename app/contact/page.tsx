'use client';
import '../../src/styles/global.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navigation from 'src/components/Molecules/Navigation';
import Contact from 'src/components/Organisms/Contact';

const colors = {};

const theme = extendTheme({ colors });

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Contact />
    </ChakraProvider>
  );
}
