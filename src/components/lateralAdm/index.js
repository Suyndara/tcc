import './index.scss';

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
                    <img src="/assets/img/i-home.png" alt="sair" />
                    <p>Home</p>
                </div>

            </footer>
        </div>
    )
}