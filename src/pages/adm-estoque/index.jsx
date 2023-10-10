import './index.scss';
import Lateral from '../../components/lateralAdm';
import Opcoes from '../../components/opcoes';
import CabecalhoAdm from '../../components/cabecalhoAdm';

export default function Estoque() {
    
    return(
        <div className='pagina-estoqueAdm'>
            <Lateral/>

            <main className='analise'>
                <CabecalhoAdm/>
                <Opcoes/>   

                <section>
                    <article>
                        <h1>Estoque</h1>

                        <aside>
                            <p>Joias</p>
                            <p>Aneis</p>
                            <p>Relogios</p>
                            <p>Correntes</p>
                            <p>Brincos</p>
                            <p>Colares</p>
                            <p>Pedras</p>
                        </aside>

                        <button>ADICIONAR</button>
                    </article>

                    <article className='sas'>
                    <p>Joias</p>
                            <p>Aneis</p>
                            <p>Relogios</p>
                            <p>Correntes</p>
                            <p>Brincos</p>
                            <p>Colares</p>
                            <p>Pedras</p><p>Joias</p>
                            <p>Aneis</p>
                            <p>Relogios</p>
                            <p>Correntes</p>
                            <p>Brincos</p>
                            <p>Colares</p>
                            <p>Pedras</p><p>Joias</p>
                            <p>Aneis</p>
                            <p>Relogios</p>
                            <p>Correntes</p>
                            <p>Brincos</p>
                            <p>Colares</p>
                            <p>Pedras</p><p>Joias</p>
                            <p>Aneis</p>
                            <p>Relogios</p>
                            <p>Correntes</p>
                            <p>Brincos</p>
                            <p>Colares</p>
                            <p>Pedras</p>
                    </article>
                </section>
            </main>
        </div>
    )
}