import { Radio } from '@chakra-ui/react';

type OptionsRadioType = {
  data: string;
  value: number;
  correction: Function;
  getAnswer: Function;
};

export default function OptionsRadio({
  data,
  value,
  correction,
  getAnswer,
}: OptionsRadioType) {
  const answer = getAnswer();

  return (
    <Radio
      key={data}
      value={data}
      colorScheme={correction(value) ? 'green' : 'red'}
      onClick={() => {
        correction(value);
      }}
      isDisabled={value ? answer === value : false}
    >
      {data}
    </Radio>
  );
}
