import "./index.scss";
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from "../../components/cabecalho";
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage'


import { useState, useRef } from "react";
import { SingUpUsuario } from "../../api/UsuarioApi";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

export default function Login() {


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  // const [ erro, setErro ] = useState();
  const [ carregando, setCarregando ] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();


  async function LogarUsuario() {
    ref.current.continuousStart();
    setCarregando(true);

    try {

      const resp = await SingUpUsuario(email, senha);
      storage('usuario-logado', resp);  

      setTimeout(() => {
        navigate('/minhaconta');
      }, 1000);

    } catch (error) {
      ref.current.complete()
      setCarregando(false);

      if (error.response.status === 401) {
      toast.error(error.response.data.erro)
    }
    }
  };


  return (
    <div className="pagina-login">
      <LoadingBar color='#ffc86d' ref={ref} />
      <Cabecalho />
      <ToastContainer />

      <article className="titulo">
        <h1>FAÇA SEU LOGIN</h1>
      </article>

      <main>
        <article className="input">

          <input className="scs" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="scs" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />

        </article>

        <div className="bt-a">

          <button className="botones" onClick={LogarUsuario} disabled={ carregando }>
            Entrar
          </button>
{/* 
          <div>
            { erro }
          </div> */}

          <a href="/cadastro">
            <strong>Não tem cadastro ?</strong>
          </a>

          <a href="/minhaconta">
            <strong> Minha conta </strong>
          </a>

        </div>

      </main>

      <div className="loading"></div>


    </div>
  );
}
