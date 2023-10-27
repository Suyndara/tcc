import './index.scss';


import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Editar from '../../assets/img/pen-solid.svg';
import Exluir from '../../assets/img/185090_delete_garbage_icon 1.png'
import Lupa from '../../assets/img/lupa.png'

import { ConsultarPorNome, ConsultarTodos, DeletarProduto, deletarImg } from '../../api/admAdd'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';


export default function Produtos() {

    const [ produtos, setProdutos ] = useState([]);
    const [ filtro, setFiltro ] = useState('');

 

    async function ExcluirProduto(produto_id, nome, imagem_produto_id, imagem) {

            confirmAlert({
                title: 'Remover Produto',
                message: `Quer mesmo remover o produto:  ${nome}`,
                buttons: [
                  {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await DeletarProduto(produto_id, nome);
                        const respImg = await deletarImg(imagem_produto_id, imagem);
    
                        if (filtro === '') {
                            ListarTodosProdutos()
                        } else {
                            filtrar()
                        }
                
                        toast.success('Produto removido com sucesso');
                    }
                  },
                  {
                    label: 'Não'
                  }
                ]
              });

    }




    async function ListarTodosProdutos() {
            const resp = await ConsultarTodos()
            setProdutos(resp)
    }




    async function filtrar() {
            const resp = await ConsultarPorNome(filtro)
            setProdutos([resp])
    }



    useEffect(() => {
        ListarTodosProdutos()
    }, [])


    return (
        <section className='pagina-produtos'>
            <Lateral />
            <ToastContainer />

                <div className='main'>
                <CabecalhoAdm />

                    <div className='busca'>

                        <input type="text" placeholder='Buscar produto por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
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
                                            <td> R$ {item.preco} </td>
                                            <td> {item.estoque} </td>
                                            <td> {item.disponivel ? 'Disponivel' : 'Indisponivel'} </td>
                                            <td> {item.categoria} </td>
                                            <td> {item.categoriaSub} </td>
                                            {<td>
                                                <img src={Editar}  alt="Caneta"/>
                                                <img src={Exluir}  alt="Lixo" onClick={() => ExcluirProduto(item.produto_id, item.nome)} />
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