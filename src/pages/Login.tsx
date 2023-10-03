import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { email } from '../redux/actions';

function Login() {
  const [validacao, setValidacao] = useState<string>('');
  const [validacaoE, setValidacaoE] = useState<string>('');
  const [desabilitar, setDesabilitar] = useState<boolean>(true);
  const param = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const c = () => {
      const validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      const valida = validRegex.test(validacaoE);
      if (valida === true && validacao.length >= 6) {
        setDesabilitar(false);
      } else {
        (
          setDesabilitar(true)
        );
      }
    };
    c();
  }, [validacao, validacaoE]);
  const b = () => {
    dispatch(email(validacaoE));
    param('/carteira');
  };
  return (
    <div>
      <input
        data-testid="email-input"
        type="email"
        onChange={ (d) => setValidacaoE(d.target.value) }
      />
      <input
        data-testid="password-input"
        type="password"
        onChange={ (a) => setValidacao(a.target.value) }
      />
      <button disabled={ desabilitar } onClick={ () => b() }>Entrar</button>
    </div>
  );
}

export default Login;
