import './index.scss';

import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape';


import { useState, useEffect } from 'react';
import { AlterarPerfilUsuario, BuscarUsuarioPorId } from '../../api/UsuarioAdd';
import { useNavigate } from 'react-router-dom';

import storage from 'local-storage';
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';


export default function Conta() {

    const [ usuario, setUsuario ] = useState('');

    const [ cliente, setCliente ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ nascimento, setNascimento ] = useState();

    const id = storage('usuario-logado').cliente_id;
    const navigate = useNavigate();

    async function SalvarClick() {
        try {


            // const dados = localStorage.getItem('usuario-logado').cliente

            await AlterarPerfilUsuario(id, cliente, email, telefone, senha, cpf, nascimento);
            toast.info('Informações adicionadas');

        } catch (error) {
            alert(error.response.data.erro)
        }
    };



    async function RemoverUsuario(id, cliente) {

        confirmAlert({
            title: 'Remover usuario',
            message: `Deseja sair do login de:${cliente}?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    // const resp = await ExcluirUsuario(id, cliente); 
                    localStorage.removeItem('usuario-logado');
                    navigate('/')
                }
              },
              {
                label: 'Não'
              }
            ]
          });
    }




    async function buscarInfoUser() {
        try {

            let info = await BuscarUsuarioPorId(id)

            setCliente(info.cliente);
            setEmail(info.email);
            setTelefone(info.telefone);
            setSenha(info.senha);
            setCpf(info.CadastroPessoa);
            setNascimento(info.nascimento.substr(0, 10));

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarInfoUser();
    }, [])



    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/');  
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.cliente)
        }
    }, []);


    return (
        <div className='pagina-minhaconta'>
            <ToastContainer />
            <Cabecalho />

            <nav>
                <article>
                    {usuario[0]}
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

                    <section onClick={() => RemoverUsuario(id, cliente)}>
                        <h1>Sair</h1> <img src="/assets/img/icone-de-sair.png" alt="i-exit" />
                    </section>
                </article>
                <aside>
                    <span>
                        <input type="text" placeholder='Nome completo' value={cliente} onChange={e => setCliente(e.target.value)} />
                        <input type="text" placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
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