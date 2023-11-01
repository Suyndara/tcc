import './index.scss';
import 'react-toastify/dist/ReactToastify.css';


import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';
import upload from '../../assets/img/upload.png'


import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cadastrarProduto, BuscarCategoria, BuscarSubCategoria, inserirImagem, alterarProduto, BuscarProdutoPorId, BuscarImagem } from '../../api/admAdd';



export default function Edicao() {

    const [nome, setNome] = useState();
    const [preco, setPreco] = useState();
    const [categoria, setCategoria] = useState();
    const [subcategoria, setSubCategoria] = useState();
    const [estoque, setEstoque] = useState();
    const [composicao, setComposicao] = useState();
    // const [ tamanho, setTamanho ] = useState();
    const [detalhes, setDestalhes] = useState();
    const [disponivel, setDisponivel] = useState(false);
    const [id, setId] = useState(0);



    const [imagem1, setImagem1] = useState('');
    const [imagem2, setImagem2] = useState('');
    const [imagem3, setImagem3] = useState('');



    const [URLimagem1, setURLImagem1] = useState('');
    const [URLimagem2, setURLImagem2] = useState('');
    const [URLimagem3, setURLImagem3] = useState('');


    const [buscaCategoria, setBuscaCategoria] = useState([]);
    const [buscaSubCategoria, setBuscaSubCategoria] = useState([]);


    const { produto_id } = useParams();

    useEffect(() => {
        if (produto_id) {
            CarregarProduto();
        }
    }, []);


    async function CarregarProduto() {
        const resposta = await BuscarProdutoPorId(produto_id);
        setNome(resposta.nome);
        setPreco(resposta.preco);
        setCategoria(resposta.categoria);
        setSubCategoria(resposta.subCategoria);
        setEstoque(resposta.estoque);
        setComposicao(resposta.composicao);
        setDestalhes(resposta.detalhes);
        setDisponivel(resposta.disponivel);

        setId(resposta.produto_id);
    }


    async function AdicionarProduto() {
        try {

            if (id === 0) {

                const resp = await cadastrarProduto(nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel);

                if (imagem1 != null) {
                    await inserirImagem(imagem1, resp.id);
                };
                if (imagem2 != null) {
                    await inserirImagem(imagem2, resp.id);
                };
                if (imagem3 != null) {
                    await inserirImagem(imagem3, resp.id);
                };

                setId(resp.id);

            } else {
                await alterarProduto(id, nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel);
            }


            toast.success(id === 0 ? 'Produto adicionado com sucesso' : 'Produto alterado com sucesso');
        } catch (error) {
            if (error.response)
                alert(error.response.data.erro);
            else
                alert(error.message);
        }
    };



    async function NovoProduto() {
        setId(0);
        setNome('');
        setPreco('');
        setEstoque('');
        setComposicao('');
        setDestalhes('');
        setDisponivel('');
    }




    async function buscarCategorias() {
        try {

            const categorias = await BuscarCategoria()
            setBuscaCategoria(categorias)
        }
        catch (error) {
            toast.error(error.response.data.erro)
        }
    };







    async function buscarSubCategoria() {
        try {

            const subcategoria = await BuscarSubCategoria()
            setBuscaSubCategoria(subcategoria)
 
        } catch (error) {
            toast.error(error.response.data.errro)
        }
    }


    function escolherImg() {
        document.getElementById('imagemCapa').click();
    }

    function escolherImg2() {
        document.getElementById('imagemCapa2').click();
    }

    function escolherImg3() {
        document.getElementById('imagemCapa3').click();
    }

    function mostrarImg() {
        if (typeof (imagem1) == 'object') {
            return URL.createObjectURL(imagem1);
        } else {
            return BuscarImagem(imagem1);
        }
    }

    function mostrarImg2() {
        if (typeof (imagem2) == 'object') {
            return URL.createObjectURL(imagem2);
        } else {
            return BuscarImagem(imagem2);
        }
    }

    function mostrarImg3() {
        if (typeof (imagem3) == 'object') {
            return URL.createObjectURL(imagem3);
        } else {
            return BuscarImagem(imagem3);
        }
    }





    useEffect(() => {
        buscarCategorias()
        buscarSubCategoria()
    }, [])



    return (
        <div className='pagina-anexagem-produto'>
            <ToastContainer />
            <Lateral />

            <main className='main-anexagem-produto'>
                <CabecalhoAdm />

                <div className='conteudo'>
                    <div className='s1'>

                        <article className='cont-1'>
                            <h1>anexagem dos produtos no banco de dados</h1>
                        </article>

                        <article className='cont-2'>

                            <div className="sep-01">
                                <h1>Descrição dos Produtos</h1>

                                <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                                <input type="number" min={0} placeholder='Estoque' value={estoque} onChange={e => setEstoque(e.target.value)} />

                                <div>
                                    <select onChange={e => setCategoria(e.target.value)}>
                                        <option>Categoria</option>
                                        {buscaCategoria.map(item => {
                                            return (
                                                <option value={item.categoria_id} > {item.categoria} </option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <textarea placeholder='Detalhes' value={detalhes} onChange={e => setDestalhes(e.target.value)} />

                                <button onClick={AdicionarProduto}> {id === 0 ? 'Salvar' : 'Alterar'} </button>
                            </div>

                            <div className="sep-02">

                                <input type="number" min={0} placeholder='Valor' value={preco} onChange={e => setPreco(e.target.value)} />

                                <div className='disponivel'>
                                    <input type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
                                    <label> Disponivel </label>
                                </div>

                                <div className='subcategoria'>
                                    <select onChange={e => setSubCategoria(e.target.value)}>
                                        <option>Sub-Categoria</option>
                                        {buscaSubCategoria.map(item => {
                                            return (
                                                <option value={item.subCategoria_id} > {item.categoriaSub}</option>
                                            )
                                        })}
                                    </select>

                                    <textarea placeholder='Composição' value={composicao} onChange={e => setComposicao(e.target.value)} />

                                    <button onClick={NovoProduto}> Novo </button>

                                </div>

                            </div>

                            <div className="sep-03">
                                <h1>Adicionar Imagens</h1>

                                <div onClick={escolherImg}>

                                    {!imagem1 &&    
                                        <img src={upload} alt="upload" />
                                    }

                                    {imagem1 &&    
                                        <img  className='imagemCapa1' src={mostrarImg()} alt="upload" />
                                    }


                                    <input id='imagemCapa' type='file' onChange={e => setImagem1(e.target.files[0])} />
                                </div>

                                <section>
                                    <div onClick={escolherImg2}>
                                    {!imagem2 &&    
                                        <img src={upload} alt="upload" />
                                    }

                                    {imagem2 &&    
                                        <img  className='imagemCapa1' src={mostrarImg2()} alt="upload" />
                                    }


                                        <input id='imagemCapa2' type='file' onChange={e => setImagem2(e.target.files[0])} />
                                    </div>
                                    <div onClick={escolherImg3}>
                                        {!imagem3 &&    
                                            <img src={upload} alt="upload" />
                                        }

                                        {imagem3 &&    
                                            <img  className='imagemCapa1' src={mostrarImg3()} alt="upload" />
                                        }


                                        <input id='imagemCapa3' type='file' onChange={e => setImagem3(e.target.files[0])} />
                                    </div>
                                </section>
                            </div>

                        </article>
                    </div>
                </div>

            </main>

        </div>
    );
};
