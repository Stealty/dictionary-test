import { setCookie } from 'nookies';

type Cookie = {
  email?: string;
  token: string;
  refreshToken: string;
};

export default function useCookies(data: Cookie) {
  setCookie(undefined, 'dictionary.credentials', data.token, {
    email: data.email,
    token: data.token,
    refreshToken: data.refreshToken,
  });
}
