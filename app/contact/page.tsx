'use client';
import '../../src/styles/global.css';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import WordInfo from 'src/components/Organisms/WordInfo';
import SearchWord from 'src/components/Molecules/SearchWord';
import Navigation from 'src/components/Molecules/Navigation';

const colors = {};

const theme = extendTheme({ colors });

export default function Page() {
  const [data, setData] = useState('' as unknown | any);

  const getData = async (
    event: { preventDefault: () => void },
    word: string,
  ) => {
    event.preventDefault();
    if (word) {
      setData('');
      const response = await fetch(
        'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
        {
          cache: 'no-store',
        },
      );
      const data = await response.json();
      return setData(data);
    } else {
      setData('');
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Flex direction="column" bgColor="gray.300" h="100%" minH="100vh">
        <SearchWord search={getData} />
        <WordInfo data={data} />
      </Flex>
    </ChakraProvider>
  );
}
