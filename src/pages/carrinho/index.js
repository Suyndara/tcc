import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import Resumo from '../../components/resumo'
import './index.scss'
import { Link } from 'react-router-dom';
import Seta from '../../assets/img/arrow-right-long-solid.svg';
import Lixo from '../../assets/img/trash.svg';
import Mais from '../../assets/img/mais.svg';
import Menos from '../../assets/img/menos.svg';
import Anel from '../../assets/img/anel.svg';



export default function Carrinho(){


    return(


        <div className='pagina-carrinho'>
            <Cabecalho />

            <main>
                <h1>Amo peitos de loiras</h1>
                
                <div className='carrinho-produtos'>
                    <h1>SEU CARRINHO</h1>
                    <p>TOTAL (0 produto)  <b>R$ 0,00</b> </p>
                    <p>Os itens do seu carrinho não estão reservados. Finalize a compra para torná-los seus itens pessoais.</p>
                
                    <div>
                        <div>
                            <img src={Anel} />

                            <div>
                                <div>
                                    <h1>Anel solitário de ouro 18k</h1>
                                    <img src={Lixo} />
                                </div>
                                <p>tamanho de aro: 9</p>
                                <div>
                                    <div>
                                        <div>
                                            <img src={Mais} />
                                            <div>1</div>
                                            <img src={Menos} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                <div className='finalizar'>
                    <div>
                    <Link to='/entrega'>FINALIZAR</Link>
                    </div>
                    <img src={Seta}/>
                    </div>
                    
                <Resumo />
                </div>
            </main>

            <Rodape />
        </div>
    );
}