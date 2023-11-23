import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function NotFound() {
    
    return(
        <div className='naoencontrado'>
            <Cabecalho/>

            <main>
                <article>
                    <h1>Página não encontrada</h1>
                </article>
            </main>
        </div>
    )
}