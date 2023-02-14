'use client';

import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { api } from 'pages/api/api';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux';
import { userSliceReducer } from 'src/store/modules/userSlice';
import { setCookie, parseCookies } from 'nookies';
import '../../src/styles/global.css';
import store from 'src/store/modules/configureStore';
import router from 'next/router';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const selector = useAppSelector((store) => store.credentials);

  useEffect(() => {
    const { 'dictionary.token': token } = parseCookies();

    if (token) {
      api.get('/me').then((response) => {
        const { email, permissions, roles } = response.data;

        dispatch(
          userSliceReducer({
            isAuthenticated: true,
            email,
            permissions,
            roles,
          }),
        );
        console.log(response.data);
      });
    }
    console.log(selector);
    if (selector.isAuthenticated) router.push('/');
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        const response = await api.post('sessions', {
          email,
          password,
        });

        const { permissions, roles, token, refreshToken } = response.data;
        dispatch(
          userSliceReducer({
            email,
            permissions,
            roles,
            isAuthenticated: true,
          }),
        );

        console.log(response.data);

        setCookie(undefined, 'dictionary.token', token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });
        setCookie(undefined, 'dictionary.refreshToken', refreshToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        });

        // router.push('/');
      } catch (err) {
        console.error(err);
        dispatch(
          userSliceReducer({
            isAuthenticated: false,
          }),
        );
      }
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
      <FormControl onSubmit={handleSubmit} color="black">
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
      </FormControl>
    </Flex>
  );
}
