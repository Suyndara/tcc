import './index.scss';
import { Link } from 'react-router-dom';

export default function Opcoes() {

    return (
        <div className='comp-opcoes'>

            <Link to='/vendas-adm' className='vendas'>
                <article>
                    <span className='a1'>

                    </span>

                    <p>Vendas</p>
                </article>
            </Link>

            <Link to='/estoque-adm' className='estoque'>
                <article>
                    <span className='a2'>

                    </span>

                    <p>Consultar</p>
                </article>
            </Link>

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