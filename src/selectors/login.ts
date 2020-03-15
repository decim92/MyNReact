const getIsLogged = (state: any): boolean => {
  if (state.login?.response === undefined) {
    return false;
  }
  return true;
};

export {getIsLogged};
