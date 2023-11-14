import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import Detalhes from '../../components/Detalhes';


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BuscarProdutoPorId } from '../../api/admAdd'



export default function DetalhesProduto() {

    const [ produto, setProduto ] = useState({});

    const { idParam } = useParams();


    useEffect(() => {
        CarregarProduto()
    }, []);



    async function CarregarProduto() {
        const resp = await BuscarProdutoPorId(idParam);
        setProduto(resp)
    }

    return (
        <div className='Pag-detalhes'>
            <Cabecalho />

            <div className='display-container'>
                <Detalhes produto={produto} />
            </div>

            <Rodape />
        </div>
    )
}