import { Text, VStack, ListItem, OrderedList } from '@chakra-ui/react';

interface MeaningsProps {
  partOfSpeech: string;
  definitions: string[];
}

type MeaningsType = {
  data: MeaningsProps;
};

export default function Meanings({ data }: MeaningsType) {
  return (
    <VStack align="start" spacing="0.5">
      <Text
        fontSize={{ base: '2rem', md: '3.5rem', lg: '4rem' }}
        textTransform="capitalize"
      >
        {data?.partOfSpeech}
      </Text>
      <OrderedList pl="33px">
        {data?.definitions.map((data: any, index: any) => {
          return (
            <ListItem key={index} fontSize={{ sm: '2.3rem', lg: '2rem' }}>
              <Text fontSize={{ sm: '2.3rem', lg: '2rem' }}>
                {data.definition}
              </Text>
            </ListItem>
          );
        })}
      </OrderedList>
    </VStack>
  );
}
