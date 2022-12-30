import { api } from 'pages/api/api';

type Credentials = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: Credentials) {
  try {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}
