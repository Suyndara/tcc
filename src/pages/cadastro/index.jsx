import './index.scss';

import Cabecalho from '../../components/cabecalho';
import storage from 'local-storage'

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { LoginUsuario } from '../../api/UsuarioApi';


export default function Cadastro() {


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');


    async function UsuarioCriado() {

        try {

            if (senha !== confirmPwd) {
                toast.error('As senhas não coincidem');
            }

            else {
                const resp = await LoginUsuario(nome, email, senha);
                console.log(resp);

                storage('usuario-pedido', {carrinho: []});
                storage('usuario-logado', resp)
                toast.info('Cliente criado com sucesso');
            }

        } catch (error) {
            toast.error(error.response.data.erro);
        }
    };



    return (

        <div className='pagina-cadastro'>
            <ToastContainer />
            <Cabecalho />

            <article className='titulo'>
                <h1>FAÇA SEU CADASTRO</h1>
                <h2>COMPRE NOSSOS MELHORES PRODUTOS</h2>
            </article>

            <article className='input'>
                <input type="text" placeholder='NOME COMPLETO' value={nome} onChange={e => setNome(e.target.value)} />
                <input type="email" placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='SENHA' value={senha} onChange={e => setSenha(e.target.value)} />
                <input type="password" placeholder='CONFIRMAR SENHA' value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} />

                <button onClick={UsuarioCriado}> Registrar </button>
            </article>

        </div>
    )
}