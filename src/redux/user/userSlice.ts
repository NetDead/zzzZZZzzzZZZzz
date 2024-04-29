import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from 'src/store';

const initialState = {
  accountData: {},
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    try {
      const response: { body: RootState } = await(await fetch('api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })).json();

      return response.body;
    } catch (e) {
      throw new Error('Fetching user error');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        fetchUser.fulfilled,
        (state, action) => {
          state.accountData = action.payload;
        }
      );
  }
});

// export const selectUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
