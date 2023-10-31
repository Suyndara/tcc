import './index.scss';
import Lateral from '../../components/lateralAdm';
import Opcoes from '../../components/opcoes';
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Anel from '../../assets/img/anelouro.png';
export default function Estoque() {

    return (
        <div className='pagina-estoqueAdm'>
            <Lateral />

            <main className='analise'>
                <CabecalhoAdm />
                <Opcoes />

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
                        <aside>
                            <div className="itens">
                                <img src={Anel} alt="ringold" />

                                <div className='infos'>
                                    <div className='ifs1'>
                                        <h1>Anel solitário de ouro 18k com diamantes de 3 pontos</h1>

                                        <p>Contem no estoque:</p>
                                        <p>QTD no estoque:</p>
                                        <p>Promoção:</p>
                                    </div>

                                    <div className='ifs'>
                                        <p>Ok</p>
                                        <p>5</p>
                                        <p>X</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </article>
                </section>
            </main>
        </div>
    )
}