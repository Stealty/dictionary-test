import { Heading, VStack, ListItem, OrderedList } from '@chakra-ui/react';

export default function Meanings({ data }: any) {
  return (
    <VStack align="start" spacing="0.5">
      <Heading as="h3" size="lg" textTransform="capitalize">
        {data?.partOfSpeech}
      </Heading>
      <OrderedList pl="15px">
        {data?.definitions.map((data: any, index: any) => {
          return <ListItem key={index}>{data.definition}</ListItem>;
        })}
      </OrderedList>
    </VStack>
  );
}
