import './index.scss';



import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Editar from '../../assets/img/pen-solid.svg';
import Exluir from '../../assets/img/185090_delete_garbage_icon 1.png'
import Lupa from '../../assets/img/lupa.png'

import { ConsultarPorNome, ConsultarTodos } from '../../api/admAdd'
import { useState, useEffect } from 'react';



export default function Produtos() {

    const [ produtos, setProdutos ] = useState([]);
    const [ filtro, setFiltro ] = useState('');

 
    async function ListarTodosFilmes() {
            const resp = await ConsultarTodos()
            setProdutos(resp)
    }

    async function filtrar() {
            const resp = await ConsultarPorNome(filtro)
            setProdutos([resp])
            console.log(resp);
    }



    useEffect(() => {
        ListarTodosFilmes()
    }, [])


    return (
        <section className='pagina-produtos'>
            <Lateral />

                <div className='main'>
                <CabecalhoAdm />

                    <div>

                        <input type="text" placeholder='Buscar' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src={Lupa} alt="Busca"  onClick={filtrar}/>

                    </div>


                    <div className='tabelas'>
                        <table>
                            <thead>
                                <tr>
                                    <th> Identificador </th>
                                    <th> Nome </th>
                                    <th> Preco </th>
                                    <th> Estoque </th>
                                    <th> Disponivel </th>
                                    <th> Categoria </th>
                                    <th> Sub-Categoria </th>
                                </tr>
                            </thead>
                            <tbody>
                            {produtos.map(item => { 
                                return (
                                    <tr>
                                        <td> # {item.produto_id} </td>
                                        <td> {item.nome} </td>
                                        <td> {item.preco} </td>
                                        <td> {item.estoque} </td>
                                        <td> {item.disponivel ? 'Sim' : 'Não'} </td>
                                        <td> {item.categoria} </td>
                                        <td> {item.categoriaSub} </td>
                                        {<td>
                                            <img src={Editar}  alt="Caneta"/>
                                            <img src={Exluir}  alt="Lixo" />
                                        </td>}
                                    </tr>   
                                )
                            })}
                            </tbody>
                        </table>
                    </div>

                </div>
        </section>
    )
}