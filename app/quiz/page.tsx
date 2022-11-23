'use client';

import '../../src/styles/global.css';

import {
  extendTheme,
  ChakraProvider,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navigation from 'src/components/Molecules/Navigation';
import Quiz from 'src/components/Organisms/Quiz';

const colors = {};

const theme = extendTheme({ colors });

export default function Page() {
  const [data, setData] = useState('' as unknown | any);
  const [selectedOption, setSelectedOption] = useState(0);
  // const randomNumber = Math.floor(Math.random() * 9);

  const getData = async () => {
    const response = await fetch('/quiz.json', {
      cache: 'no-store',
    });
    const data = await response.json();
    // const newData = data.slice(randomNumber, randomNumber + 3);
    setSelectedOption(0);
    return setData(data.sort());
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Flex direction="column" bgColor="gray.300" h="100%" minH="100vh">
        {data && (
          <Quiz
            data={data}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        )}
      </Flex>
    </ChakraProvider>
  );
}
