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
                    <Link to='/login-adm' className='voltas'>
                        <img src="/assets/img/i-exit.png" alt="sair" />

                        <p>Sair</p>
                    </Link>
                </div>

                <div className='rodape2'>
                    <Link to='/home-adm' className='voltas'>
                        <img src="/assets/img/i-home.png" alt="sair" />
                        <p>Home</p>
                    </Link>
                </div>

            </footer>
        </div>
    );
}