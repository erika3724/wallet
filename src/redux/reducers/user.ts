// Esse reducer será responsável por tratar as informações da pessoa usuária

type ActionType = {
  type: string,
  email: string,
};

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email: action.email };
    default:
      return state;
  }
};

export default user;
