import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Cadastro() {

    const [Mostrar, setMostrar] = useState(false);
    
    return(
        <div className='pagina-cadastro'>
            <Cabecalho/>

            <article className='titulo'>
                <h1>FAÇA SEU CADASTRO</h1>
        
                <h2>COMPRE NOSSOS</h2>
                <h3>MELHORES PRODUTOS</h3>

                <>
                  <div className='sas' onChange={Mostrar} value={setMostrar} true>

                  </div>   
                </>
            </article>
            
            <main>
                <article className='input'>
                    <input className='scs' type="text" placeholder='NOME COMPLETO' />
                    <input className='scs' type="text" placeholder='EMAIL'/>
                    <input className='scs' type="text" placeholder='SENHA' />
                    <input className='scs' type="text" placeholder='CONFIRMAR SENHA' />
                    <input className='scs' type="text" placeholder='CPF' />
                </article>

                <div className='bt-a'>
                    <button className='botones'>Registrar</button>
                </div>
            </main>
        </div>
    )
}