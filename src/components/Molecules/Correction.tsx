import { Button, Text, VStack } from '@chakra-ui/react';

type CorrectionType = {
  correct: boolean;
};

export default function Correction({ correct }: CorrectionType) {
  return (
    <Text>
      {correct
        ? "Congratulations, you're correct!"
        : "Sorry, you're not correct. Try again."}
    </Text>
  );
}
