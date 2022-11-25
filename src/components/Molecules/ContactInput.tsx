import {
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';
import { MotionValue } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
  ref: HTMLInputElement;
  type: string;
}

interface ConfigProps {
  value: number | RegExp;
  message: string;
}

type ContactInputType = {
  leftChildreen?: string;
  rightChildreen?: string;
  type: string;
  size: string;
  placeholder: string;
  labelText: string;
  required: boolean;
  mode: 'input' | 'textarea';
  errorMessage: ErrorMessageProps;
  register: Function;
  minLenghtConfig?: ConfigProps;
  maxLengthConfig?: ConfigProps;
  pattern?: ConfigProps;
};

export default function ContactInput({
  leftChildreen,
  rightChildreen,
  type,
  size,
  placeholder,
  labelText,
  errorMessage,
  mode,
  register,
  minLenghtConfig,
  maxLengthConfig,
  pattern,
}: ContactInputType) {
  return (
    <VStack align="start" spacing="0" w="100%">
      <FormLabel mb="0" htmlFor={labelText}>
        {labelText}
      </FormLabel>
      <InputGroup size={size}>
        {leftChildreen && <InputLeftAddon children={leftChildreen} />}
        {mode === 'input' ? (
          <Input
            id={labelText}
            type={type}
            placeholder={placeholder}
            {...register(labelText, {
              required: labelText + ' is required',
              minLength: minLenghtConfig,
              maxLength: maxLengthConfig,
              pattern: pattern,
            })}
          />
        ) : (
          <Textarea
            placeholder={placeholder}
            id={labelText}
            type={type}
            {...register(labelText, {
              required: labelText + ' is required',
              minLength: minLenghtConfig,
              maxLength: maxLengthConfig,
              pattern: pattern,
            })}
          />
        )}
        {rightChildreen && <InputRightAddon children={rightChildreen} />}
      </InputGroup>
      <FormHelperText color="red" fontWeight="semibold">
        {errorMessage?.message}
      </FormHelperText>
    </VStack>
  );
}
