import './index.scss';

import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg'
import Lupa from '../../assets/img/lupa.png'
import Pessoa from '../../assets/img/pessoinha.png'
import Carrinho from '../../assets/img/carrinho.png'
import Barras from '../../assets/img/i-bars.svg';
import { useState } from 'react';



export default function Cabecalho () {


    const [aparecer, setDisplay] = useState('none');

    function alternarMenu() {
        if(aparecer === 'none') {
            setDisplay('flex')

        } else {
            setDisplay('none');
        }
    }

    return(
        <div className='comp-cabecalho' > 
            <Link className='logo' to='/'>
                <img alt='a-logo' src={Logo} />
            </Link>

            <article className="atributo">
                <article className='opcoes'>
                    <div className='barras'>                   
                        <img onClick={alternarMenu} src={Barras} alt="bars" />

                        <div className='displayers' style={{display: aparecer}}>
                            <img src={Pessoa} alt="person" />
                            <img src={Carrinho} alt="car" />
                        </div>
                    </div>
                </article>

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