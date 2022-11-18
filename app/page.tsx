'use client';

import '../src/styles/global.css';
import { ChakraProvider, extendTheme, Flex, Text } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column">
        <Text color={'black'} fontWeight="bold" fontSize="2xl">
          Hello World
        </Text>
        <Text color={'red'} fontWeight="bold" fontSize="2xl">
          Hello World
        </Text>
        <Text color={'cyan'} fontWeight="bold" fontSize="2xl">
          Hello World
        </Text>
      </Flex>
    </ChakraProvider>
  );
}
