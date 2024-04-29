import React from 'react';

import { LoginFormTypes } from './LoginForm.types';

export const LoginForm: React.FC<LoginFormTypes> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="login"/>
      <input type="password" name="password"/>
      <button type="submit">Log in</button>
    </form>
  );
};
