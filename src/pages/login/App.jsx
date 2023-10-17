import "./index.scss";
import Cabecalho from "../../components/cabecalho";



export default function Login() {


  return (
    <div className="pagina-login">
      <Cabecalho />

      <article className="titulo">

        <h1>FAÇA SEU</h1>
        <h1>LOGIN</h1>

      </article>

      <main>
        <article className="input">

          <input className="scs" type="email" placeholder="E-mail" />
          <input className="scs" type="password" placeholder="Senha" />

        </article>

        <div className="bt-a">

          <button className="botones">
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
