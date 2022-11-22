import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';

export default function SearchWord({ search }: any) {
  const [value, setValue] = useState('');

  return (
    <Flex margin="10px 10%">
      <FormControl
        as="form"
        onSubmit={(event) => search(event, value.trim().toLowerCase())}
      >
        <InputGroup>
          <Input
            placeholder="Search for any word"
            onChange={(event) => setValue(event.target.value)}
          ></Input>
          <InputRightElement>
            <Button
              type="button"
              onClick={(event) => search(event, value.trim().toLowerCase())}
              padding="0"
            >
              {<BiSearchAlt size={20} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  );
}