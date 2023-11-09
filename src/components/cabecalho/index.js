import './index.scss';

import { Link } from 'react-router-dom';

import storage from 'local-storage';

import Logo from '../../assets/img/logo.svg'
import Lupa from '../../assets/img/lupa.png'
import Pessoa from '../../assets/img/pessoinha.png';
import Carrinho from '../../assets/img/carrinho.png'
import Barras from '../../assets/img/i-bars.svg';
import Casa from '../../assets/img/i-casa.png';
import { useState } from 'react';



export default function Cabecalho() {


    const [aparecer, setDisplay] = useState('none');

    // const idUsuario = storage('usuario-logado').cliente_id;

    function alternarMenu() {
        if (aparecer === 'none') {
            setDisplay('flex')

        } else {
            setDisplay('none');
        }
    }

    return (
        <div className='comp-cabecalho' >
            <Link className='logo' to='/'>
                <img alt='a-logo' src={Logo} />
            </Link>

            <article className="atributo">
                <article className='opcoes'>
                    <div className='barras'>
                        <img onClick={alternarMenu} src={Barras} alt="bars"/>

                        <div className='displayers' style={{ display: aparecer }}>
                            <Link to='/login'>
                                <img src={Pessoa} alt="person" />
                            </Link>

                            <Link to='/carrinho'>
                                <img src={Carrinho} alt="car" />
                            </Link>
                        </div>
                    </div>
                </article>

                <section className='barra-pesquisa'>
                    <input type="text" placeholder='Pesquisar' />
                    <img alt='lupa' src={Lupa} />
                </section>

                <section className="navegacao">
                    <Link to='/'> NOIVADO </Link>
                    <Link to='/filtro'> JOIAS </Link>
                    <Link to='/'> PRESENTES </Link>
                    <Link to='/'> ESPECIAIS </Link>
                </section>
            </article>

            <article className='icones'>
                <Link className='login' to="/login">
                    <img src={Pessoa    } alt="pessoa" />        
                </Link>

                <Link className='carrinho' to='/carrinho'>
                    <img alt="carru" src={Carrinho} />
                </Link>
            </article>

            <article className='opcoes-s2'>
                <div className='barras-s2'>
                    <img onClick={alternarMenu} src={Barras} alt="bars" />

                    <div className='displayers-s2' style={{ display: aparecer }}>
                        <Link className='login' to='/login'>
                            <img src={Pessoa} alt="person" />
                        </Link>

                        <Link className='carrinho' to='/carrinho'>
                            <img src={Carrinho} alt="car" />
                        </Link>

                        <Link className='Homer' to='/'>
                            <img src={Casa} alt="home" />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}