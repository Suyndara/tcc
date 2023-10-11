import './index.scss';


import storage from 'local-storage';
import Lateral from "../../components/lateralAdm";
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Opcoes from '../../components/opcoes';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function HomeAdm() {

    const navigate = useNavigate();

    function SairClick () {
        storage.remove('adm-logado');
        navigate('/login-adm')
    }
    

    return (
        <div className="Pagina-HomeAdm">
           <Lateral/>

            <main className='analise'>
                <CabecalhoAdm/>

                <Opcoes/>
                <section>
                    <Link className='volta' to='/edicao'>
                        <article>
                            <span className='a1'>

                            </span>
                            
                            <p>Editor</p>
                        </article>
                    </Link>

                    <article>
                        <span className='a2'>

                        </span>

                        <p>Adicionar</p>
                    </article>

                    <Link to='/login-adm' className='volta'>
                        <article onClick={SairClick}>
                                <span className='a3'>

                                </span>

                                <p>Sair</p>
                        </article>
                    </Link>
                </section>

                <div className="footer"></div>              
            </main>
        </div>
    );
}