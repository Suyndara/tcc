import './index.scss';
import Lateral from "../../components/lateralAdm";
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Opcoes from '../../components/opcoes';

import { Link } from 'react-router-dom';

export default function HomeAdm() {
    

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
                        <article>
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