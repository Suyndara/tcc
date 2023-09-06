import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho from '../cabecalho';

function App() {
  return (
    <div className="pagina-login">
      <Cabecalho />

      <article className='titulo'>
        <h1>FAÇA SEU</h1>
        <h1> LOGIN</h1>
      </article>

      <main>
        <article className='input'>
          <input className='scs' type="text" placeholder='email'/>

          <input className='scs' type="text" placeholder='senha' />
        </article>

        <div className='bt-a'>
          <button className='botones'>Entrar</button>
          <a>Esqueceu sua senha ?</a>
        </div>
      </main>

      <Link className='Voltar' to='/'> Volta </Link>    
    </div>
  );
}

export default App;
