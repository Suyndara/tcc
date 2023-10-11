import './index.scss';
import Cabecalho from '../../components/cabecalho';

import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {

    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState ('');
    const [Senha, setSenha] = useState ('');
    const [Confirmar, setConfirmar] = useState('');
    const [ setErro] = useState('')

    const navigate = useNavigate()

    async function Cadastrar(){
        try{
            const resp = await axios.post('http://localhost:5000/usuario/login',{
                nome: Nome,
                email: Email,
                senha: Senha,
                confirmar: Confirmar
            });

            if(resp.status === 500){
                setErro(resp.data.erro)
            }

            else(
                navigate('/login')
            )
        }

        catch(error){
            if(error.reponse.data === 500)
            setErro (error.response.data.erro)
        }
    }

    return (

        <div className='pagina-cadastro'>
            <Cabecalho/>

            <article className='titulo'>
                <h1>FAÇA SEU CADASTRO</h1>
                <h2>COMPRE NOSSOS MELHORES PRODUTOS</h2>
            </article>
            
            <article className='input'>
                <input type="text" placeholder='NOME COMPLETO' value={Nome} onChange={e => setNome (e.target.value)}/>
                <input type="text" placeholder='EMAIL' value={Email} onChange={e => setEmail (e.target.value)}/>
                <input type="text" placeholder='SENHA' value={Senha} onChange={e => setSenha (e.target.value)} />
                <input type="text" placeholder='CONFIRMAR SENHA' value={Confirmar} onChange={e => setConfirmar (e.target.value)}/>

                <button onClick={Cadastrar}> Registrar </button>
            </article>

        </div>
    )
}