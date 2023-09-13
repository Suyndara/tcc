import './index.scss';
import { Link } from 'react-router-dom';


import Logo from '../../assets/img/logo.png'
import Lupa from '../../assets/img/lupa.png'
import Pessoa from '../../assets/img/pessoinha.png'
import Carrinho from '../../assets/img/carrinho.png'


export default function Cabecalho () {

    return(
        <div className='comp-cabecalho' >

            <img className='logo' src={Logo} />

            <article className="atributo">
                <section className='barra-pesquisa'>
                    <input type="text" placeholder='Pesquisar' />
                    <img src={Lupa} />
                </section>

                <section className="navegacao">
                    <Link to='/'> NOIVADO </Link>
                    <Link to='/'> JOIAS </Link>
                    <Link to='/'> PRESENTES </Link>
                    <Link to='/'> ESPECIAIS </Link>
                </section>
            </article>

            <article className='icones'>
                <img src={Pessoa} />
                <img src={Carrinho} alt="" />
            </article>

        </div>
    )
}