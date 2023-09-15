import Carrossel from '../../components/carrossel';
import Cabecalho from '../../components/cabecalho';
import './index.scss';


export default function Home() {
    
    return(
        <div className='pagina-home'>
            <Cabecalho/>
            <Carrossel/>

            <main className='s2'>
                <article>
                    <img alt='truck' src="/assets/img/i-truck.png"/>
                     <h1>COMPRA SEGURA, ENTREGA RÁPIDA</h1>
                </article>

                <article>
                    <img alt='car' src="/assets/img/i-card.png"/>
                     <h1>PAGAMENTO SIMPLES, FLEXÍVEL E SEGURO</h1>
                </article>

                <article>
                    <img alt='ret' src="/assets/img/i-return.png"/>
                    <h1>TEMOS GARANTIA DE ATÉ 1 ANO</h1>
                </article>

                <article>
                    <img alt='loc' src="/assets/img/i-locke.png"/>
                    <h1>COMPRE COM SEGURANÇA</h1>
                </article>
            </main>

            <main className='s3'>
                <article>
                    <img alt='ring' src="/assets/img/anel.png"/>
                    <button>ANÉIS</button>
                </article>

                <article>
                    <img alt='necklace' src="/assets/img/colar.png"/>
                    <button>COLARES</button>
                </article>

                <article>
                    <img alt='brink' src="/assets/img/brinco.png"/>
                    <button>BRINCOS</button>
                </article>

                <article>
                    <img alt='kid' src="/assets/img/infantil.png"/>
                    <button>INFANTIL</button>
                </article>
            </main>
        </div>
    )
}