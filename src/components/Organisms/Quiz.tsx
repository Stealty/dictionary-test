import { VStack, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Correction from '../Molecules/Correction';
import Options from '../Molecules/Options';

interface DataProps {
  answer: string;
  question: string;
  options: string[];
}

type QuizType = {
  data: DataProps[];
  selectedOption: number;
  setSelectedOption: Function;
};

export default function Quiz({
  data,
  selectedOption,
  setSelectedOption,
}: QuizType) {
  const [index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(Boolean);

  function nextQuestion() {
    setIndex((index) => index + 1);
    setSelectedOption(0);
  }

  function getAnswer() {
    return data[index].answer;
  }

  function correction(value: any) {
    if (data[index].answer === value) {
      setIsCorrect(true);
      return true;
    } else {
      setIsCorrect(false);
      return false;
    }
  }

  return data[index] ? (
    <VStack key={data[index].question} mt="40px">
      <Text>{data[index].question}</Text>
      <VStack>
        <Text> Options: </Text>
        <Options
          data={data}
          index={index}
          value={selectedOption}
          setValue={setSelectedOption}
          correction={correction}
          getAnswer={getAnswer}
        />
        {selectedOption ? <Correction correct={isCorrect} /> : null}
        {isCorrect && <Button onClick={nextQuestion}>Next Question</Button>}
      </VStack>
    </VStack>
  ) : (
    <Button w="x-sm" onClick={() => setIndex(0)} alignSelf="center">
      Try Again
    </Button>
  );
}
