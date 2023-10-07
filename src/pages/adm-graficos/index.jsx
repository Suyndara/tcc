import './index.scss';
import Lateral from "../../components/lateralAdm";
import Cabecalho from '../../components/cabecalhoAdm';
import Opcoes from '../../components/opcoes';

export default function Graficos(){

    return(
        <div className='graficos-adm'>
            <Lateral/>

            <main>
                <Cabecalho/>

                <nav>
                    <Opcoes/>
                </nav>

                <section>
                    <article>
                        <aside>
                            <p>Aumento de vendas </p>

                            <div className='as-porc'>
                                <h1>40%</h1>
                            </div>

                            <div className='as-p'>
                                <p>-Sendo os anéis solitários que mais vendem</p>
                                <p>-Sendo os brincos que menos vendem </p>
                            </div>

                            <div className='as-g'>

                            </div>
                        </aside>
                        
                        <aside>
                                <p>Ações Empresariais</p>
                                <p>Como nossa empresas esta oraganizada de acordo com nossos lucros:</p>

                                <img src="/assets/img/grupo3.png" alt="grupo3" />
                        </aside>
                    </article>
                </section>
            </main>
        </div>
    )
}