import { Link } from 'react-router-dom';
import './App.scss';
import Cabecalho from '../../components/cabecalho';

function App() {
  return (
    <div className="pagina-app">
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

        <button className='botones'>Entrar</button>
      </main>

      <Link className='Voltar' to='/'> Volta </Link>    
    </div>
  );
}

export default App;
