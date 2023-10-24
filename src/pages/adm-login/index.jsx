import './index.scss';

import Joyeria from '../../assets/img/logo.svg';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage'


import { SingUpAdm } from '../../api/admApi.js';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function LognAdm(){

    const [ email, setEmail ] = useState()
    const [ senha, setSenha ] = useState();
    const [ erro, setErro ] = useState();

    const [ carregando, setCarregando ] = useState(false)


    const navigate = useNavigate();
    const ref = useRef();


    useEffect(() => {
        if (storage('adm-logado')) {
           navigate('/home-adm');
        }
    }, []);

    async function LogarAdm() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const resp = await SingUpAdm(email, senha);

            storage('adm-logado', resp)

            setTimeout(() => {
                navigate('/home-adm');
            }, 2000)

        } catch (error) {
            ref.current.complete();
            setCarregando(false);

            if ( error.response.status === 401 ) {
                setErro(error.response.data.erro)
            }
        }

    }

    function teclaPressionada(e){
        if(e.key === 'Enter')
        LogarAdm();
    }

    return (
        
        <div className='pagina-loginAdm'>
            <LoadingBar color='#ffc86d' ref={ref} />  
            <img src={Joyeria} alt='joyeria'/>

            <section className='inputs'>

                <article className="atributo">
                    <input type="e-mail" placeholder='Administrador' value={email} onChange={e => setEmail(e.target.value)} />      
                </article>

                <article className="atributo">
                    <input type='password' placeholder='Senha' value={senha} onKeyUp={teclaPressionada} onChange={e => setSenha(e.target.value)}/>
                </article>

                <div>
                    { erro }   
                </div>

            </section>

            <button onClick={LogarAdm} disabled={carregando}>LOGAR</button>
     
        </div>
    );
};