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

const save = (data: string[]) => {
  return {
    type: 'click',
    payload: data,
  };
};
const remove = (data: any[]) => {
  return {
    type: 'remove',
    payload: data,
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
      dispatch(save(a));
    } catch (error: any) {
      dispatch(requestFailed);
    }
  };
};

export { fecthData, fecthData2, remove };
