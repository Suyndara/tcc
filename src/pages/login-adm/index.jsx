import './index.scss';
import Joyeria from '../../assets/img/logo.svg';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginAdm(){

    const [Email, setEmail] = useState ('');
    const [Senha, setSenha] = useState ('');
    const [ setErro] = useState ('')

    const navigate = useNavigate()

    async function LogarAdm() {
        try {
            
            const resp = await axios.post('http://localhost:5000/adm/login',{
                email: Email,
                senha: Senha
            });

            if (resp.status === 500){
                setErro(resp.data.erro)
            }

            else (
                navigate('/home-adm')
            ) 

        } catch (error) {
            if (error.response.data === 500){
                setErro (error.response.data.erro)
             }
        }
    }

    return(
        
        <div className='pagina-loginAdm'>
            <img src={Joyeria} alt='joyeria'/>

            <section className='inputs'>
            <article className="atributo">
                    <input type="text" placeholder='Administrador' value={Email} onChange={e => setEmail (e.target.value)} />      
            </article>

            <article className="atributo">
                <input type='password' placeholder='Senha' value={Senha} onChange={e => setSenha (e.target.value)}/>
            </article>
            </section>

            <button onClick={LogarAdm} >LOGAR</button>
        </div>
    );
}