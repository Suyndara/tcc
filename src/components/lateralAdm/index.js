import './index.scss';
import { Link } from 'react-router-dom';

export default function Lateral(){
    
    return(
        <div className='comp-lateral'>
            <nav>
                <img src="/assets/img/i-pessoinha.png" alt="pes" />
            </nav>

            <footer>
                <div className='rodape'>  
                    <img src="/assets/img/i-exit.png" alt="sair" />
                    <p>Sair</p>
                </div>

                <div className='rodape2'>  
                <Link to='/'>
                    <img src="/assets/img/i-home.png" alt="sair" />
                </Link>
                    <p>Home</p>
                </div>
            </footer>
        </div>
    )
}