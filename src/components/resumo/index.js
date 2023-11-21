import { useEffect } from 'react';
import './index.scss';


import storage from 'local-storage';
import { useState } from 'react';


export default function Resumo() {   
    const [ total, setTotal ] = useState(0);
    const [pedido, setPedido] = useState({carrinho: []})


    function puxarProdutos() {
        const produtoBuscado = storage('usuario-pedido').carrinho;
        let totalCalc = 0;
        for(let cont = 0; cont < produtoBuscado.length; cont++){
            totalCalc = totalCalc + (produtoBuscado[cont].preco * produtoBuscado[cont].qtd)
        }
        let pedido = storage('usuario-pedido')
        pedido.total = totalCalc
        storage('usuario-pedido', pedido)
        setTotal(totalCalc);
    }   



 
    
    useEffect(() => {
        setPedido(storage('usuario-pedido'))
        puxarProdutos()
        
        // eslint-disable-next-line
    }, [])


    return (


        <div className='resumo'>
            <h2>RESUMO DO PEDIDO</h2>

            <div className='produto-valor'>
                <p>{pedido.carrinho.length} produto</p>
                <p>R$ {total}</p>
            </div>

            <div className='entrega-frete'>
                <p>Entrega</p>
                <p>Grátis</p>
            </div>

            <div className='total'>
                <h2>TOTAL</h2>
                <h2>R$ {total}</h2>
            </div>

            <div className='cupom'>
                <input type='text' placeholder='Digite um cupom promocional' />
            </div>
        </div>
    );
}