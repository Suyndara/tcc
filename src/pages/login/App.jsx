import './index.scss';
import Cabecalho from '../../components/cabecalho';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [Cliente, setCliente] = useState('')
  const [Email, setEmail] = useState ('');
  const [Senha, setSenha] = useState ('');
  const [CadastroPessoaFisica, setCadastroPessoaFisica] = useState ('');

  const [ setErro] = useState('')

  const navigate = useNavigate()

  async function Login() {
    try{
      const resp = await axios.post('http://localhost:5000/usuario/login',{
        cliente: Cliente,
        email: Email,
        senha: Senha,
        cadastroPessoaFisica: CadastroPessoaFisica 
      });

      if(resp.status === 500){
        setErro(resp.data.erro)
      }

      else(
        navigate('/')
      )

    } 

    catch(error){
      if(error.response.data === 500){
        setErro (error.response.data.erro)
      }
    }


  }

  return (
    <div className="pagina-login">
      <Cabecalho />

      <article className='titulo'>
        <h1>FAÇA SEU</h1>
        <h1> LOGIN</h1>
      </article>

      <main>
        <article className='input'>
          <input className='scs' type="text" placeholder='Nome' value={Cliente} onChange={e => setCliente (e.target.value)}/>
          <input className='scs' type="text" placeholder='Email' value={Email} onChange={e => setEmail (e.target.value)}/>
          <input className='scs' type="password" placeholder='Senha' value={Senha} onChange={e => setSenha (e.target.value)}/>
          <input className='scs' type="text" placeholder='CPF' value={CadastroPessoaFisica} onChange={e => setCadastroPessoaFisica (e.target.value)}/>
        </article>

        <div className='bt-a'>
          <button className='botones' onClick={Login}>Entrar</button>
          <a href='/cadastro'><strong>Não tem cadastro ?</strong></a>
          <a href='/'>Esqueceu sua senha ?</a>
        </div>
      </main>
      <div className='loading'>
      
      </div>
    </div>
  );
}