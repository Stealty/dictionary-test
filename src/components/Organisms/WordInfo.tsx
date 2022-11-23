import { Heading, ScaleFade, VStack } from '@chakra-ui/react';
import Definitions from '../Molecules/Definitions';
import Phonetics from '../Molecules/Phonetics';

interface WordInfoProps {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  license: {
    name: string;
    url: string;
  };
  meanings: {
    [x: string]: any;
    partOfSpeech: string;
    definitions: [];
    synonyms: string[];
  };
}

type WordInfoType = {
  data: WordInfoProps[];
};

export default function WordInfo({ data }: WordInfoType) {
  return (
    <ScaleFade initialScale={0.5} in={data && true}>
      <VStack
        bgColor="white"
        direction="column"
        margin="0 10%"
        padding="15px 30px"
        borderRadius={20}
        align="start"
        spacing="20px"
      >
        <Heading
          as="h3"
          fontSize={{ base: '2rem', md: '3.5rem', lg: '4rem' }}
          textTransform="capitalize"
        >
          {data[0]?.word}
        </Heading>
        <hr style={{ width: '100%' }} />
        <Phonetics data={data} />
        <hr style={{ width: '100%' }} />
        <Definitions data={data} />
      </VStack>
    </ScaleFade>
  );
}
