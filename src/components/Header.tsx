import { useSelector } from 'react-redux';

type Gs = {
  user: { email:string },
  wallet: { currency: string, field: number }
};

function Header() {
  const { user, wallet } = useSelector((state: Gs) => state);
  return (
    <div>
      <p data-testid="email-field">{ user.email }</p>
      <p data-testid="total-field">{ wallet.field }</p>
      <p data-testid="header-currency-field">{ wallet.currency }</p>
    </div>
  );
}

export default Header;
