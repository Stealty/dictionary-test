import { createSlice } from '@reduxjs/toolkit';

type CredentialsProps = {};

const initialState: { credentials: CredentialsProps } = {
  credentials: {},
};

const dataSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    dataSliceReducer: (state, action) => {
      state.credentials = action.payload;
    },
  },
});

export const { dataSliceReducer } = dataSlice.actions;

export default dataSlice;
