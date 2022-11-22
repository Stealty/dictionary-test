import { Flex, Heading, ScaleFade } from '@chakra-ui/react';
import Definitions from '../Molecules/Definitions';
import Phonetics from '../Molecules/Phonetics';

export default function WordInfo({ data }: any) {
  return (
    <ScaleFade initialScale={0.5} in={data}>
      <Flex
        bgColor="white"
        direction="column"
        margin="0 10%"
        padding="15px 30px"
        borderRadius={20}
      >
        <Heading as="h3" size="2xl" textTransform="capitalize">
          {data[0]?.word}
        </Heading>
        <Phonetics data={data} />
        <Definitions data={data} />
      </Flex>
    </ScaleFade>
  );
}
