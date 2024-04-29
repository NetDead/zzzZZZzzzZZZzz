import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from 'src/redux/user/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
});
