import { useEffect } from 'react';
import './index.scss';


import storage from 'local-storage';
import { useState } from 'react';


export default function Resumo() {   
    const [ total, setTotal ] = useState(0);


    function puxarProdutos() {
        const produtoBuscado = storage('usuario-pedido').carrinho;
        let totalCalc = 0;
        for(let cont = 0; cont < produtoBuscado.length; cont++){
            totalCalc = totalCalc + (produtoBuscado[cont].preco * produtoBuscado[cont].qtd)
        }
        setTotal(totalCalc);
    }   



    useEffect(() => {
        puxarProdutos()
    }, [])


    return (


        <div className='resumo'>
            <h2>RESUMO DO PEDIDO</h2>

            <div className='produto-valor'>
                <p>1 produto</p>
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