import * as React from 'react';

export interface User {
  name: string;
  surname: string;
}

export const useUser = (initialUser: User) => {
  const [user, setUser] = React.useState(initialUser);

  React.useEffect(() => {
    // simulate async call
    setTimeout(() => {
      setUser({ name: 'Jane', surname: 'Smith' });
    }, 500);
  }, []);

  return {
    user,
    setUser,
  };
};
