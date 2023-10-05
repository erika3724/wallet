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
        expenses: [action.payload, ...state.expenses],
      };
    default:
      return state;
  }
}

export default wallet;
