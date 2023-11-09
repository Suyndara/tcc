import './index.scss';

import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape';


import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AlterarPerfilUsuario, BuscarUsuarioPorId } from '../../api/UsuarioAdd';
import { useEffect } from 'react';

import storage from 'local-storage';


export default function Conta() {


    const [ cliente, setCliente ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ nascimento, setNascimento ] = useState();

    // const [infoInicial, setInfoInicial] = useState({});

    // const id = localStorage('usuario-logado').id;

    async function SalvarClick() {
        try {

                await AlterarPerfilUsuario( cliente, email, telefone, senha, cpf, nascimento)

        } catch (error) {
            alert(error.message)
        }
    }

    async function buscarInfoUser() {
        try {

            let info = await BuscarUsuarioPorId()
            
            setCliente(info.cliente);
            setEmail(info.email);
            setTelefone(info.telefone);
            setSenha(info.senha);
            setCpf(info.CadastroPessoa);
            setNascimento(info.nascimento);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarInfoUser();
    }, [])


    return (
        <div className='pagina-minhaconta'>
            <Cabecalho />

            <nav>
                <article>
                    <img src="/assets/img/pencil.png" alt="lapis" />
                </article>
            </nav>

            <main>
                <article className='opcoes'>
                    <p>Minha conta</p>
                    <p>Meus Pedidos</p>
                    <p>Crédito em Loja</p>
                    <p>Devoluções</p>
                    <p>Detalhes da Conta</p>
                    <p>Meus Endereços</p>
                    <p>Atualizar Senha</p>

                    <section>
                        <h1>Sair</h1>
                        <Link to='/'>
                            <img src="/assets/img/icone-de-sair.png" alt="i-exit" />
                        </Link>
                    </section>
                </article>
                <aside>
                    <span>
                        <input type="text" placeholder='Nome completo' value={cliente} onChange={e => setCliente(e.target.value)} />
                        <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type="text" placeholder='Número de telefone' value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        <input type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />

                        <section> 
                            <input type="text" placeholder='cpf' value={cpf} onChange={e => setCpf(e.target.value)} />
                            <input type="date" placeholder='Data de nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                        </section>

                        <button onClick={SalvarClick}> Salvar </button>
                    </span>
                 </aside>

            </main>

            <Rodape />
        </div>
    )
}