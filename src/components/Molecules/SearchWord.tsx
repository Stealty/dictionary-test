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

type SearchWordType = {
  search: Function;
};

export default function SearchWord({ search }: SearchWordType) {
  const [value, setValue] = useState('');

  return (
    <Flex margin="10px 10%">
      <FormControl
        as="form"
        label="search"
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
