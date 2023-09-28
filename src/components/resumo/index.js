import './index.scss';



export default function Resumo(){


    return(

        
        <div className='resumo'>
                        <h2>RESUMO DO PEDIDO</h2>

                        <div className='produto-valor'>
                            <p>1 produto</p>
                            <p>R$ 2.600,00</p>
                        </div>

                        <div className='entrega-frete'>
                            <p>Entrega</p>
                            <p>Grátis</p>
                        </div>

                        <div className='total'>
                            <h2>TOTAL</h2>
                            <h2>R$ 2.600,00</h2>
                        </div>

                        <div className='cupom'>
                            <input type='text' placeholder='Digite um cupom promocional'/>
                        </div>
                    </div>
    );
}