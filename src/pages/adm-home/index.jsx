import './index.scss';


import storage from 'local-storage';
import Lateral from "../../components/lateralAdm";
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Opcoes from '../../components/opcoes';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function HomeAdm() {
    const navigate = useNavigate();

    function RemoverAdm() {
        storage.remove('adm-logado');
        navigate('/login-adm');
    };


    return (
        <div className="Pagina-HomeAdm">
           <Lateral/>

            <main className='analise'>
                <CabecalhoAdm/>

                <Opcoes/>
                <section>
                    <Link className='volta' to='/adicionar-adm'>
                        <article>
                            <span className='a1'>

                            </span>
                            
                            <p>Adicionar</p>
                        </article>
                    </Link>

                    <Link className='volta' to='/consultar-adm'>
                    <article>
                        <span className='a2'>

                        </span>

                        <p>Produtos</p>
                    </article>
                    </Link>

                    <Link to='/login-adm' className='volta'>
                        <article onClick={ RemoverAdm }>
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