import { useDispatch, useSelector } from 'react-redux';
import { Gs } from './Header';
import { Dispatch } from './WalletForm';
import { remove } from '../redux/actions';

function Table() {
  const { user, wallet } = useSelector((state: Gs) => state);
  const dispatch: Dispatch = useDispatch();
  const exclui = (z: number) => {
    const mn = wallet.expenses.filter((m) => m.id !== z);
    dispatch(remove(mn));
  };
  return (
    <table style={ { textAlign: 'center' } }>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {wallet.expenses.map((a) => (
          <tr key={ a.id }>
            <td>{ a.description }</td>
            <td>{ a.tag }</td>
            <td>{ a.method }</td>
            <td>{ Number(a.value).toFixed(2) }</td>
            <td>{ a.exchangeRates[a.currency].name }</td>
            <td>
              {Number(a.exchangeRates[a.currency]
                .ask).toFixed(2)}
            </td>
            <td>
              {(Number(a.exchangeRates[a.currency]
                .ask) * Number(a.value)).toFixed(2) }
            </td>
            <td>Real</td>
            <td>
              <button
                data-testid="delete-btn"
                onClick={ () => exclui(a.id) }
              >
                X
              </button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
