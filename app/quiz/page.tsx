'use client';

import '../../src/styles/global.css';

import { Flex, Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Navigation from 'src/components/Molecules/Navigation';
import Quiz from 'src/components/Organisms/Quiz';

export default function Page() {
  const [data, setData] = useState('' as unknown | any);
  const [selectedOption, setSelectedOption] = useState(0);
  // const randomNumber = Math.floor(Math.random() * 9);

  const getData = async () => {
    if (!data) {
      const response = await fetch('/quiz.json', {
        cache: 'no-store',
      });
      const data = await response.json();
      // const newData = data.slice(randomNumber, randomNumber + 3);
      setSelectedOption(0);
      return setData(data.sort());
    } else return data.sort();
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  return (
    <>
      <Navigation />
      <Flex direction="column" h="100%" minH="100vh">
        {data !== '' ? (
          <Quiz
            data={data}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ) : (
          <Flex w="100vw" h="100vh" pt="30px" justify="center">
            <Skeleton borderRadius="15px" width="30%" height="20%" />
          </Flex>
        )}
      </Flex>
    </>
  );
}
