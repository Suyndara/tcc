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
                <input className="top" type="text" placeholder='NOME COMPLETO' />
                <input type="text" placeholder='EMAIL'/>
                <input type="text" placeholder='SENHA' />
                <input type="text" placeholder='CONFIRMAR SENHA' />
                <input className="bottom"type="text" placeholder='CPF' />

                <button> REGISTRAR </button>
            </article>

        </div>
    )
}