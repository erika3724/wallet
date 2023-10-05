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
      const bel = wallet.expenses[0].currency;
      const [abelha]: any[] = Object.entries(wallet.expenses[0]?.exchangeRates)
        .filter((a) => a[0] === bel);
      const num = Number(abelha[1].ask) * Number(wallet.expenses[0]?.value);
      setField(field + num);
    }
  }, [wallet]);
  return (
    <header>
      <p data-testid="email-field">{ user.email }</p>
      <p data-testid="total-field">{ field.toFixed(2).toString() }</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
