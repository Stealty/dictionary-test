import { RadioGroup } from '@chakra-ui/react';
import OptionsRadio from '../Atoms/OptionsRadio';

interface QuestionProps {
  options: string[];
}

type QuestionType = {
  data: QuestionProps[];
  index: number;
  value?: any;
  setValue: any;
  correction: Function;
  getAnswer: Function;
};

export default function Question({
  data,
  index,
  value,
  setValue,
  correction,
  getAnswer,
}: QuestionType) {
  return (
    <RadioGroup
      onChange={setValue}
      value={value}
      display="flex"
      flexDirection="column"
    >
      {data[index].options.map((data: any) => {
        return (
          <OptionsRadio
            key={data}
            data={data}
            value={value}
            correction={correction}
            getAnswer={getAnswer}
          />
        );
      })}
    </RadioGroup>
  );
}
