'use client';

import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import store from 'src/store/modules/configureStore';
import { dataSliceReducer } from 'src/store/modules/dataSlice';
import '../../src/styles/global.css';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const selector = useAppSelector(dataSliceReducer);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const data = {
        email,
        password,
      };

      dispatch(dataSliceReducer(data));

      console.log(data);
    },
    [email, password],
  );

  return (
    <Flex
      direction="column"
      bgColor="gray.300"
      h="100%"
      minH="100vh"
      p="2.5rem"
    >
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="emailInput">Email Address</FormLabel>
        <Input
          id="emailInput"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          w="24rem"
          display="block"
          mb="0.5rem"
        />
        <FormLabel htmlFor="passwordInput">Password</FormLabel>
        <Input
          id="passwordInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          w="24rem"
          display="block"
          mb="0.5rem"
        />
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <Button type="submit" onClick={() => console.log(selector)}>
          Get data
        </Button>
      </FormControl>
    </Flex>
  );
}
