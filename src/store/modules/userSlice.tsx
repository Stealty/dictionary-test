import { createSlice } from '@reduxjs/toolkit';

type SignInCredentials = {
  email: string;
  permissions: string;
  roles: string;
  isAuthenticated: boolean;
};

// const initialState: { credentials: SignInCredentials } = {
//   credentials: {
//     email: '',
//     password: '',
//     isAuthenticated: false,
//   },
// };

const userSlice = createSlice({
  name: 'credentials',
  initialState: {
    email: '',
    permissions: '',
    roles: '',
    isAuthenticated: false,
  },
  reducers: {
    userSliceReducer: (state: SignInCredentials, action) => {
      state.email = action.payload.email;
      state.permissions = action.payload.permissions;
      state.roles = action.payload.roles;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { userSliceReducer } = userSlice.actions;

export default userSlice;
