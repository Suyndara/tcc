import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    
    const navigate = useNavigate();

    function AbrirHome() {
        navigate('/');
    }

    return(
        <div className='naoencontrado'>
            <Cabecalho/>

            <main>
                <article>
                    <h1>Página não encontrada</h1>
                </article>

                <button onClick={AbrirHome}>Voltar ao Menu</button>
            </main>
        </div>
    )
}