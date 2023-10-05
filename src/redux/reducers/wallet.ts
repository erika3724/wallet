// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
type ActionType = {
  type: string,
  payload: any,
  soma: any
};
const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

function wallet(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'requestSucessful':
      return { ...state,
        currencies: Object.keys(action.payload)
          .filter((b) => b !== 'USDT') };
    case 'click':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'remove':
      return {
        ...state,
        expenses: [...action.payload],
      };
    default:
      return state;
  }
}

export default wallet;
