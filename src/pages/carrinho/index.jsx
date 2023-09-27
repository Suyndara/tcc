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
                <div className='carrinho-produtos'>
                    <h1>SEU CARRINHO</h1>
                    <p>TOTAL (0 produto)  <b>R$ 0,00</b> </p>
                    <p>Os itens do seu carrinho não estão reservados. Finalize a compra para torná-los seus itens pessoais.</p>
                
                    <div className='produto'>
                        <div className='informacao-produto'>
                            <img src={Anel}/>
                            <div className='informacao'>
                                <h1><b>Anel solitário de ouro 18k</b></h1>
                                <p>tamanho de aro: 9</p>

                                <div className='contador'>
                                    <div>
                                        <img src={Mais}/>
                                        <p>1</p>
                                        <img src={Menos}/>
                                    </div>
                                </div>
                            </div>
                            <div className='preco'>
                                <img src={Lixo}/>
                                <p><b>R$ 2.600,00</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                <div className='finalizar'>
                    <div>
                    <Link to='/entrega'>FINALIZAR</Link>
                    </div>
                        <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i>
                    </div>
                    
                <Resumo />
                </div>
            </main>

            <Rodape />
        </div>
    );
}