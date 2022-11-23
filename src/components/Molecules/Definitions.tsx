import { Flex } from '@chakra-ui/react';
import Meanings from './Meanings';

interface DefinitionsProps {
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

type DefinitionsType = {
  data: DefinitionsProps[];
};

export default function Definitions({ data }: DefinitionsType) {
  return (
    <Flex direction="column" gap="20px">
      {data[0]?.meanings.map((data: any, index: any) => {
        return <Meanings data={data} key={index} />;
      })}
    </Flex>
  );
}
