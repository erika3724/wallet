import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fecthData, fecthData2 } from '../redux/actions';
import { Gs } from './Header';

export type ReduxState = {
  field: number;
  currency: string[],
};

export type Dispatch = ThunkDispatch<ReduxState, void, AnyAction>;

function WalletForm() {
  const [valor, setValor] = useState<string>('');
  const [descript, setDescript] = useState<string>('');
  const [moeda, setMoeda] = useState('USD');
  const [tipo, setTipo] = useState('Dinheiro');
  const [estilo, setEstilo] = useState('Alimentação');
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthData());
  }, []);

  const rootState = useSelector((state: Gs) => state);
  const aa = (c: any) => {
    c.preventDefault();
    const d = rootState.wallet.expenses;
    const obj = {
      id: d.length > 0 ? d[d.length - 1].id + 1 : 0,
      value: valor,
      description: descript,
      currency: moeda,
      method: tipo,
      tag: estilo,
    };

    setValor('');
    setDescript('');
    dispatch(fecthData2(obj));
  };

  return (
    <form>
      <input
        type="text"
        value={ valor }
        onChange={ (a) => setValor(a.target.value) }
        data-testid="value-input"
        placeholder="Valor das despesas"
      />
      <input
        type="text"
        value={ descript }
        onChange={ (a) => setDescript(a.target.value) }
        data-testid="description-input"
        placeholder="Descrição"
      />
      <select
        value={ moeda }
        onChange={ (a) => setMoeda(a.target.value) }
        data-testid="currency-input"
      >
        {rootState.wallet.currencies.map((a) => (
          <option value={ a } key={ a }>{ a }</option>
        ))}
      </select>
      <select
        value={ tipo }
        onChange={ (a) => setTipo(a.target.value) }
        data-testid="method-input"
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
        value={ estilo }
        onChange={ (a) => setEstilo(a.target.value) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button onClick={ (a) => aa(a) }> Adicionar despesa </button>
    </form>
  );
}

export default WalletForm;
