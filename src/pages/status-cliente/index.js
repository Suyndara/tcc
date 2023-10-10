import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Comercio from '../../assets/img/comercio.svg';
import Money from '../../assets/img/money.svg';
import Negocio from '../../assets/img/negocio.svg';
import Home from '../../assets/img/home.svg';
import Star from '../../assets/img/star.svg';


export default function StatusCliente(){



    return(


        <div className='pagina-status'>
            <div>
                <h2>Código de Produto: T23YUY1TR3E43323</h2>
                
                <div className='etapas'>
                    <div className='comercio'>
                        <div className='imagem'>
                            <img src={Comercio} alt='' />               
                        </div>
                        <h3>Pedido feito</h3>
                        <p>23/03/22</p>
                    </div>

                    <div className='pagamento'>
                        <div className='imagem'>
                            <img src={Money} alt='' />
                        </div>
                        <h3>Pagamento</h3>
                        <p>Realizado</p>
                    </div>

                    <div className='envio'>
                        <div className='imagem'>
                            <img src={Home} alt='' />
                        </div>
                        <h3>Enviando</h3>
                    </div>

                    <div className='negocio'>
                        <div>
                            <img src={Negocio} alt='' />
                        </div>
                        <h3>Pedido Entregue</h3>
                    </div>

                    <div className='avaliacao'>
                        <div className='imagem'>
                            <img src={Star} alt='' />
                        </div>
                        <h3>Avaliação</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}