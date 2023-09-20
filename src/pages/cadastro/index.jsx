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
                <input type="text" placeholder='Nome completo' />
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Senha' />
                <input type="text" placeholder='Confirmar senha' />
                <input type="text" placeholder='CPF' />

                <button> Registrar </button>
            </article>

        </div>
    )
}