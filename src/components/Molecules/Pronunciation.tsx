import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineSound } from 'react-icons/ai';

type PronunciationType = {
  data: string;
};

export default function Pronunciation({ data }: PronunciationType) {
  const [pronunciation, setPronunciation] = useState(() => new Audio(data));

  useEffect(() => {
    if (data) {
      setPronunciation(new Audio(data));
    }
  }, [data]);

  return (
    <Button
      h="100%"
      onClick={() => {
        pronunciation.play();
      }}
    >
      <AiOutlineSound />
    </Button>
  );
}
