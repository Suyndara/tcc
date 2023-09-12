import './index.scss';
import Cabecalho from '../cabecalho';

export default function Login() {
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
    </div>
  );
}