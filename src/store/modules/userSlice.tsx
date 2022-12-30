import { createSlice } from '@reduxjs/toolkit';

type SignInCredentials = {
  email: string;

  permissions: string;
  roles: string;
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
  },
  reducers: {
    userSliceReducer: (state: SignInCredentials, action) => {
      state.email = action.payload.email;
      state.permissions = action.payload.permissions;
      state.roles = action.payload.roles;
    },
  },
});

export const { userSliceReducer } = userSlice.actions;

export default userSlice;
