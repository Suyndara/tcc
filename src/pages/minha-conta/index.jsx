import './index.scss';
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';


export default function Conta(){

    return(
        <div className='pagina-minhaconta'>
            <Cabecalho/>

            <nav>
                <article>
                    <img src="/assets/img/pencil.png" alt="lapis" />
                </article>
            </nav>

            <main>
                <article className='opcoes'>
                        <p>Minha conta</p>
                        <p>Meus Pedidos</p>
                        <p>Crédito em Loja</p>
                        <p>Devoluções</p>
                        <p>Detalhes da Conta</p>
                        <p>Meus Endereços</p>
                        <p>Atualizar Senha</p>

                        <section>
                            <h1>Sair</h1>
                            <Link to='/'>
                                <img src="/assets/img/icone-de-sair.png" alt="i-exit" />
                            </Link>
                        </section>
                </article>

                <aside>
                    <span>
                        <input type="text" placeholder='Nome completo'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Número de telefone'/>
                        <input type="text" placeholder='Endereço'/>

                        <section>
                            <input type="text" placeholder='Cidade'/>
                            <input type="text" placeholder='Estado'/>                                
                        </section>                        

                        <input type="text" placeholder='Senha'/>
                    </span>
                </aside>
            </main>

            <Rodape/>
        </div>
    )
}