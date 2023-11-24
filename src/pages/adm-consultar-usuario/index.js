import './index.scss';
import Lateral from '../../components/lateralAdm';
import Opcoes from '../../components/opcoes';
import CabecalhoAdm from '../../components/cabecalhoAdm';

import Editar from '../../assets/img/pen-solid.svg';
import Exluir from '../../assets/img/185090_delete_garbage_icon 1.png'
import Lupa from '../../assets/img/lupa.png'

import { ConsultarPorNome, ConsultarTodos, DeletarProduto, deletarImg } from '../../api/admAdd'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function Estoque() {

    const [produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();


    function EditarProduto(id) {
        navigate(`/alterar-adm/${id}`)
    }

    async function ExcluirProduto(produto_id, nome, imagem) {

        confirmAlert({
            title: 'Remover Produto',
            message: `Quer mesmo remover o produto:  ${nome}`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const respImg = await deletarImg(produto_id, imagem);
                        const resp = await DeletarProduto(produto_id, nome);

                        if (filtro === '') {
                            ListarTodosProdutos();
                        } else {
                            filtrar()
                        }

                        toast.info('Produto removido com sucesso');
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
    };



    useEffect(() => {
        ListarTodosProdutos()
    }, []);



    return (
        <div className='pagina-consultar'>
            <Lateral />

            <main className='analise'>
                <CabecalhoAdm />
                <Opcoes />

                <section>
                    <div className='busca'>

                        <input type="text" placeholder='Buscar usuário por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src={Lupa} alt="Busca" onClick={filtrar} />

                    </div>


                    <div className='tabelas'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th> Cliente </th>
                                            <th> Email </th>
                                            <th> Senha </th>
                                            <th> Cpf </th>
                                            <th> Telefone </th>
                                            <th> nascimento </th>
                                            <th> imagem </th>
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
                                                        <img src={Editar} alt="Caneta" onClick={() => EditarProduto(item.produto_id)} />
                                                        <img src={Exluir} alt="Lixo" onClick={() => ExcluirProduto(item.produto_id, item.nome)} />
                                                    </td>}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    </section>
                </main>
            </div>
    )
}