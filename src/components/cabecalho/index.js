import './index.scss';
import { Link } from 'react-router-dom';


import Logo from '../../assets/img/logo.png'
import Lupa from '../../assets/img/lupa.png'
import Pessoa from '../../assets/img/pessoinha.png'
import Carrinho from '../../assets/img/carrinho.png'


export default function Cabecalho () {

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
                
                <Link className='carrinho' to='/'>
                    <img src={Carrinho} alt="" />
                </Link>
            </article>
        </div>
    )
}