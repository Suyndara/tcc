import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Cadastro() {
    
    return (

        <div className='pagina-cadastro'>
            <Cabecalho/>

            <article className='titulo'>
                <h1>FAÇA SEU CADASTRO</h1>
                <h2>COMPRE NOSSOS MELHORES PRODUTOS</h2>
            </article>
            
            <article className='input'>
                <input type="text" placeholder='NOME COMPLETO' />
                <input type="text" placeholder='EMAIL'/>
                <input type="text" placeholder='SENHA' />
                <input type="text" placeholder='CONFIRMAR SENHA' />
                <input type="text" placeholder='CPF' />
            </article>

        </div>
    )
}