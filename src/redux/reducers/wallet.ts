// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
type ActionType = {
  type: string,
  payload: number,
};
const INITIAL_STATE = {
  field: 0,
  currency: 'BRL',
};

function wallet(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'field':
      return { ...state, field: action.payload };
    default:
      return state;
  }
}

export default wallet;
