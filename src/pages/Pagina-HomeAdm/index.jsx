import './index.scss';
import Lateral from "../../components/lateralAdm";
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Opcoes from '../../components/opcoes';

export default function HomeAdm() {
    

    return (
        <div className="Pagina-HomeAdm">
           <Lateral/>

            <main>
                <CabecalhoAdm/>

                <Opcoes/>

                <section>
                        <article>
                        <span className='a1'>

                        </span>
                        
                        <p>Editor</p>
                    </article>

                    <article>
                        <span className='a2'>

                        </span>

                        <p>Adicionar</p>
                    </article>

                    <article>
                        <span className='a3'>

                        </span>

                        <p>Sair</p>
                    </article>
                </section>

                <div className="footer">
                    
                </div>              
            </main>
        </div>
    );
}