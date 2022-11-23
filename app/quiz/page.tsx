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
import { useState } from 'react';
import Navigation from 'src/components/Molecules/Navigation';

const colors = {};

const theme = extendTheme({ colors });

export default function Page() {
  const [data, setData] = useState('' as unknown | any);
  const randomNumber = Math.floor(Math.random() * 9);

  const getData = async () => {
    const response = await fetch('http://localhost:3000/api/server', {
      cache: 'no-store',
    });
    const data = await response.json();
    const newData = data.slice(randomNumber, randomNumber + 3);
    return setData(newData.sort());
  };

  function chooseOption(event: any) {
    console.log(event?.target?.value);
  }

  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Flex direction="column" bgColor="gray.300" h="100%" minH="100vh">
        <Button onClick={() => getData()}>Fetch api</Button>
        {data && (
          <VStack align="start" key={data.question}>
            <Text>{data[0].question}</Text>
            <HStack spacing="5px">
              <Text> Options: </Text>
              {data[0].options.map((data: any) => {
                return (
                  <Button
                    h="100%"
                    key={data}
                    value={data}
                    onClick={() => chooseOption(event)}
                  >
                    {data}
                  </Button>
                );
              })}
            </HStack>
          </VStack>
        )}
      </Flex>
    </ChakraProvider>
  );
}
