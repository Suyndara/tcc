import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {

    return(
        <div className='comp-cabecalho'>
            <img className='logo' src="/assets/img/logo.png" alt="logo" />

            <article className='meio'>
                <section className='pesquisa'>
                    <input placeholder='Pesquisar'/>
                    <img className='lupa' src="/assets/img/lupa.png" alt="" />
                </section>

                <section className='opcoes'>
                    <Link className='Voltar' to='/'>NOIVADO</Link>    
                    <Link className='Voltar' to='/'>JOIAS</Link>    
                    <Link className='Voltar' to='/'>PRESENTES</Link>    
                    <Link className='Voltar' to='/'>ESPECIAIS</Link>    
                </section>
            </article>

            <article className='icones'>
                <img src="/assets/img/pessoinha.png" alt="pessoa" />
                <img src="/assets/img/carrinho.png" alt="carro" />
            </article>
        </div>
    )
}