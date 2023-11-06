import './index.scss';

import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape';


import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Conta() {


    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ data, setData ] = useState();



    const [ cliente, setCliente ] = useState([]);

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

                {cliente.map(item => {
                    return (
                        <span>
                            <input type="text" placeholder='Nome completo' value={item.nome}/>
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder='Número de telefone' />
                            <input type="password" placeholder='Senha' />
    
                            <section>
                                <input type="text" placeholder='cpf' />
                                <input type="date" placeholder='Data de nascimento' />
                            </section>
    
                        </span>
                    );
                })}

            </main>

            <Rodape />
        </div>
    )
}