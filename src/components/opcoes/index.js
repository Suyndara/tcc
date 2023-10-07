import './index.scss';
import { Link } from 'react-router-dom';

export default function Opcoes() {

    return(
        <div className='comp-opcoes'>
            <article>
                <span className='a1'>

                </span>
                
                <p>Vendas</p>
            </article>

            <article>
                <span className='a2'>

                </span>

                <p>Estoques</p>
            </article>

            <Link to='/graficos-adm' className='graph'>
                <article>
                    <span className='a3'>

                    </span>

                    <p>Gráficos</p>
                </article>
            </Link>
        </div>
    )
}