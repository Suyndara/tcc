import "./index.scss";
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from "../../components/cabecalho";
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage'


import { useState } from "react";
import { SingUpUsuario } from "../../api/UsuarioApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


export default function Login() {


  const [email, setEmail] = useState()
  const [senha, setSenha] = useState();


  const navigate = useNavigate();

  async function LogarUsuario() {
    try {

      const resp = await SingUpUsuario(email, senha);
      console.log(resp);

      toast.info('Peitos')

    } catch (error) {
      alert(error.response.data.erro);
    }
  }


  return (
    <div className="pagina-login">
      <ToastContainer />
      <Cabecalho />

      <article className="titulo">
        <h1>FAÇA SEU LOGIN</h1>
      </article>

      <main>
        <article className="input">

          <input className="scs" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="scs" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />

        </article>

        <div className="bt-a">

          <button className="botones" onClick={LogarUsuario}>
            Entrar
          </button>

          <a href="/cadastro">
            <strong>Não tem cadastro ?</strong>
          </a>

          <a href="/">Esqueceu sua senha ?</a>

        </div>

      </main>

      <div className="loading"></div>


    </div>
  );
}
