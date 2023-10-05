// Coloque aqui suas actions
export const email = (mail:any) => {
  return {
    type: 'email',
    email: mail,
  };
};

const requestStarted = () => {
  return {
    type: 'requestStarted',
  };
};

const requestSucessful = (data: string[]) => {
  return {
    type: 'requestSucessful',
    payload: data,
  };
};

function requestFailed(error: any) {
  return {
    type: 'requestFailed',
    payload: error,
  };
}

const save = (data: string[], a: number) => {
  return {
    type: 'click',
    payload: data,
    soma: a.toFixed(2),
  };
};

const fecthData = () => {
  return async (dispatch: any) => {
    try {
      dispatch(requestStarted());
      const data = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await data.json();
      dispatch(requestSucessful(result));
    } catch (error: any) {
      dispatch(requestFailed);
    }
  };
};

const fecthData2 = (a: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(requestStarted());
      const data = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await data.json();
      a.exchangeRates = result;
      const mn: any = Object.entries(a.exchangeRates)
        .filter((z: any) => z[0] === a.currency)[0][1];
      const vaa = a.value * Number(mn.ask);
      dispatch(save(a, vaa));
    } catch (error: any) {
      dispatch(requestFailed);
    }
  };
};

export { fecthData, fecthData2 };
