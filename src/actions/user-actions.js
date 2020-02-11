export const CREATE_USER = 'CREATE_USER';

const defaultUserData = {
  name: '',
  email: '',
};

export const createUser = userData => {
  const userId = Date.now().toString();
  const user = {
    id: userId,
    ...defaultUserData,
    ...userData,
  };

  return {
    type: 'CREATE_USER',
    payload: {
      userId,
      user,
    },
  };
};
