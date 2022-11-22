import { Flex } from '@chakra-ui/react';
import Meanings from './Meanings';

export default function Definitions({ data }: any) {
  return (
    <Flex direction="column" gap="20px">
      {data[0]?.meanings.map((data: any, index: any) => {
        return <Meanings data={data} key={index} />;
      })}
    </Flex>
  );
}
