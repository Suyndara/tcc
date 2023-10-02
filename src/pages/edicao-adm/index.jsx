import './index.scss';
import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';

export default function Edicao(){

    return(
        <div className='pagina-edicao'>
            <Lateral/>

            <main>
                <CabecalhoAdm/>

                <div className='s1'>

                    <article className='cont-1'>
                        <h1>ANEXAGEM DOS PRODUTOS NO BANCO DE DADOS</h1>
                    </article>

                    <article className='cont-2'>
                        <section>    
                            <input type="text" placeholder='Nome'/>
                            <input type="text" placeholder='Valores'/>
                            <input type="text" placeholder='Categoria'/>
                            <input type="text" placeholder='Qtd. Inicial'/>
                            <input type="text" placeholder='Composição'/>
                            <input type="text" placeholder='Detalhes'/>

                            <button>ADICIONAR</button>
                            
                        </section>

                        <aside>
                            <article>
                                <h1>imagens.png</h1>

                               <div className='bt-img'>
                                    <button>
                                        <img src="/assets/img/plus.png" alt="" />
                                    </button>
                                </div> 
                            </article>
                        </aside>
                    </article>
                </div>
            </main>
        </div>
    )
}