import './index.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


import Logo from '../../assets/img/logo.svg'
import Lupa from '../../assets/img/lupa.png'
import Pessoa from '../../assets/img/pessoinha.png'
import Carrinho from '../../assets/img/carrinho.png'
import storage from 'local-storage';



export default function Cabecalho () {

    const navigate = useNavigate();

    return(
        <div className='comp-cabecalho' > 
            <Link className='logo' to='/'>
                <img alt='a-logo' src={Logo} />
            </Link>

            <article className="atributo">
                <section className='barra-pesquisa'>
                    <input type="text" placeholder='Pesquisar' />
                    <img alt='lupa' src={Lupa} />
                </section>

                <section className="navegacao">
                    <Link to='/'> NOIVADO </Link>
                    <Link to='/'> JOIAS </Link>
                    <Link to='/'> PRESENTES </Link>
                    <Link to='/'> ESPECIAIS </Link>
                </section>
            </article>

            <article className='icones'>
                <Link className='login' to='/login'>
                    <img alt='icone-pessoa' src={Pessoa}/>
                </Link>
                
                <Link className='carrinho' to='/carrinho'>
                    <img alt="carru" src={Carrinho}/>
                </Link>
            </article>
        </div>
    )
}