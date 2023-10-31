import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Comercio from '../../assets/img/comercio.svg';
import Money from '../../assets/img/money.svg';
import Negocio from '../../assets/img/negocio.svg';
import Home from '../../assets/img/home.svg';
import Star from '../../assets/img/star.svg';


export default function StatusCliente() {



    return (


        <div className='pagina-status'>
            <Cabecalho />

            <div className='codigo-status'>
                <p>Código de Produto: T23YUY1TR3E43323</p>

                <div className='etapas'>
                    <div className='barra'></div>

                    <div className='comercio'>
                        <div className='imagem'>
                            <img src={Comercio} alt='' />
                        </div>
                        <h3>Pedido feito</h3>
                        <p>23/03/22</p>
                    </div>

                    <div className='comercio'>
                        <div className='imagem'>
                            <img src={Money} alt='' className='money' />
                        </div>
                        <h3>Pagamento</h3>
                        <p>Realizado</p>
                    </div>

                    <div className='comercio'>
                        <div className='imagem2'>
                            <img src={Home} alt='' />
                        </div>
                        <h3>Enviando</h3>
                    </div>

                    <div className='comercio'>
                        <div className='imagem2'>
                            <img src={Negocio} alt='' />
                        </div>
                        <h3>Pedido Entregue</h3>
                    </div>

                    <div className='comercio'>
                        <div className='imagem2'>
                            <img src={Star} alt='' className='especial' />
                        </div>
                        <h3>Avaliação</h3>
                    </div>
                </div>
                <hr />

                <div className='fale-conosco'>
                    <p>Estamos no aguardo do pagamento para o evio do produto.
                        Estimamos que se o valor for pago corretamente o produto chegara nos dias 28 á 31 de junho.</p>

                    <button>FALE COM O VENDEDOR</button>
                </div>
                <hr />

                <div className='cancelar'>
                    <button>CANCELAR O PEDIDO</button>
                </div>
                <hr />

                <div className='garantia'>
                    <p>Caso o vendedor não envie no tempo eperado, voce pode fazer a extenção de sua garantia aqui.</p>
                    <button>ESTENDA SUA GARANTIA</button>
                </div>
            </div>
        </div>
    );
}