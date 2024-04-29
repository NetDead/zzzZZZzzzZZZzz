import React from 'react';
// import { useAppSelector } from 'src/hooks';

import { LoginForm } from 'src/components/LoginForm';

// import {
//   selectUser,
// } from 'src/redux/user/userSlice';

const Login: React.FC = () => {

  // TODO: to add JWT based authentication logic
  // const user = useAppSelector(selectUser);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section>
      <h1>Hello</h1>

      <LoginForm onSubmit={ submit }/>
    </section>
  );
};

export { Login };
