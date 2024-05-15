import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from 'src/client';
import { gql } from 'urql';

const initialState = {
  accountData: {},
};

const UserQuery = gql`
  query GetUser {
    user {
      id,
      name,
      email,
    }
  }
`;

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const { data } = await client.query(UserQuery, {});

    return data;
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
