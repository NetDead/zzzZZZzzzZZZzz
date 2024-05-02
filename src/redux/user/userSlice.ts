import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from 'src/utils/gql';

const initialState = {
  accountData: {},
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    try {
      const { data } = await gql(`
        query GetUser {
          user {
            id,
            name
          }
        }
      `);

      return data;
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

export const userReducer = userSlice.reducer;
