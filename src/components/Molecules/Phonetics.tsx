import { Text, HStack } from '@chakra-ui/react';
import removeBar from 'src/utils/removeBar';
import Pronunciation from './Pronunciation';

export default function Phonetics({ data }: any) {
  return data[0] ? (
    <HStack spacing="30px" h="40px">
      <Text fontSize="x-large">
        Pronunciation:{' '}
        {data[0].phonetic
          ? removeBar(data[0].phonetic)
          : data[0].phonetics[0].text
          ? removeBar(data[0].phonetics[0].text)
          : removeBar(data[0].phonetics[1].text)}
      </Text>
      <Pronunciation data={data[0]?.phonetics[0].audio} />
    </HStack>
  ) : (
    <Text>{data ? 'Phonetic not found' : ''}</Text>
  );
}
