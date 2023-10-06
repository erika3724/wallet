import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export type Gs = {
  user: { email:string },
  wallet: { currencies: string[], field: number, expenses: any[] }
};

function Header() {
  const { user, wallet } = useSelector((state: Gs) => state);
  const [field, setField] = useState(0);
  useEffect(() => {
    if (wallet.expenses[0]) {
      const nova:number[] = wallet.expenses
        .map((a) => a.exchangeRates[a.currency].ask * a.value);
      const result:any = nova.reduce((a, b) => Number(a) + Number(b));
      setField(Number(result));
    }
    if (wallet.expenses.length === 0) setField(0);
  }, [wallet]);

  return (
    <header>
      <p data-testid="email-field">{ user.email }</p>
      <p data-testid="total-field">
        { field.toFixed(2)
          .toString() }

      </p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
