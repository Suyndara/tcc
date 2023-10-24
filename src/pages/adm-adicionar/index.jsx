import './index.scss';
import 'react-toastify/dist/ReactToastify.css';


import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';
import add from '../../assets/img/adicionar.png'
import upload from '../../assets/img/upload.png'


import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { cadastrarProduto, BuscarCategoria, BuscarSubCategoria, inserirImagem } from '../../api/admAdd';


export default function Edicao(){

    const [ nome, setNome ] = useState();
    const [ preco, setPreco ] = useState();
    const [ categoria, setCategoria ] = useState();
    const [ subcategoria, setSubCategoria ] = useState();
    const [ estoque, setEstoque ] = useState();
    const [ composicao, setComposicao ] = useState();
    const [ detalhes, setDestalhes ] = useState();
    const [ disponivel, setDisponivel ] = useState(false);

    const [ imagem1, setImagem1 ] = useState('');
    const [ imagem2, setImagem2 ] = useState('');
    const [ imagem3, setImagem3 ] = useState('');


    const [ buscaCategoria, setBuscaCategoria ] = useState([]);
    const [ buscaSubCategoria, setBuscaSubCategoria ] = useState([]);


    async function AdicionarProduto() {
        try {
            
            const resp = await cadastrarProduto( nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel );
            toast.success('Produto adicionado com sucesso');

            if (imagem1 != null) {
                await inserirImagem(imagem1, resp.id);
            }
            if (imagem2 != null) {
                await inserirImagem(imagem2, resp.id);
            }
            if (imagem3 != null) {
                await inserirImagem(imagem3, resp.id);
            }


        } catch (error) {
             toast.error(error.response.data.erro);
        }
    };




    async function buscarCategorias(){
        try {

            const categorias = await BuscarCategoria()
            setBuscaCategoria(categorias)
        }
        catch(error){
            toast.error(error.response.data.erro)
        }
    }





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
        return URL.createObjectURL(imagem1); 
    }

    function mostrarImg2() {
        return URL.createObjectURL(imagem2)   
    }

    function mostrarImg3() {
        return URL.createObjectURL(imagem2)   
    }





    useEffect(() => {
        buscarCategorias()
        buscarSubCategoria()
    }, [])



    return(
        <div className='pagina-anexagem-produto'>
            <ToastContainer />
            <Lateral/>

            <main className='main-anexagem-produto'>
                <CabecalhoAdm/>

                <div className='s1'>

                    <article className='cont-1'>
                        <h1>ANEXAGEM DOS PRODUTOS NO BANCO DE DADOS</h1>
                    </article>

                    <article className='cont-2'>

                        <div className="sep-01"> 
                            <h1>Detalhes dos produtos</h1>

                            <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />

                                <div>      
                                    <select onChange={e => setCategoria(e.target.value)}>
                                            <option>Selecionar Categoria</option>
                                            {buscaCategoria.map(item => {
                                                return(
                                                    <option value={item.categoria_id} > {item.categoria} </option>
                                                )
                                            })}
                                    </select>
                                </div>

                            <textarea placeholder='Detalhes' value={detalhes} onChange={e => setDestalhes(e.target.value)} />
                            <input type="number" placeholder='Estoque' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                        </div>

                        <div className="sep-02">
                            <div> 
                                <label> R$ </label>  
                                <input type="text" placeholder='Valor' value={preco} onChange={e => setPreco(e.target.value)} />
                            </div>
                            <div>
                                <select onChange={e => setSubCategoria(e.target.value)}>
                                        <option>Selecionar Sub-Categoria</option>
                                        {buscaSubCategoria.map(item => {
                                            return(
                                                <option value={item.subCategoria_id} > {item.categoriaSub}</option>
                                            )
                                        })}
                                </select>

                                <textarea placeholder='Composição'value={composicao} onChange={e => setComposicao(e.target.value)} />

                                <div>   
                                    <input type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                                    <label> Disponivel </label>
                                </div> 
                                
                            </div>
                            
                        </div>

                        <div className="sep-03">
                            <div onClick={escolherImg}>
                                {imagem1
                                 ?   <img src={mostrarImg()} alt="upload" />  
                                 : <img src={upload} alt="upload" />   
                                }
                                

                                <input id='imagemCapa'  type='file' onChange={e => setImagem1(e.target.files[0])} />
                            </div>

                            <section>
                                <div onClick={escolherImg2}>
                                    {imagem2 
                                    ?   <img src={mostrarImg2()} alt="upload" />  
                                    : <img src={upload} alt="upload" />   
                                    }
                                    

                                    <input id='imagemCapa2'  type='file' onChange={e => setImagem2(e.target.files[0])} />
                                </div>
                                <div onClick={escolherImg3}>
                                    {imagem3 
                                    ?   <img src={mostrarImg3()} alt="upload" />  
                                    : <img src={upload} alt="upload" />   
                                    }
                                    

                                    <input id='imagemCapa3'  type='file' onChange={e => setImagem3(e.target.files[0])} />
                                </div>
                            </section>
                        </div>
                        <button onClick={ AdicionarProduto }> ADICIONAR </button>
                    </article>
                </div>
                
            </main>

        </div>
    );
};


/*
                        <section>

                            <div className="sep-1">

                                
                                





                

                            </div>

                            <div className="sep-2">

                                
                                

                                    <article >
                                        <img src={add} alt="Adicionar +" />
                                    </article>
                            </div>

                            <div>
                                <input type='file' onChange={e => setImagem(e.target.files[0])} />
                            </div>

                            <button onClick={ AdicionarProduto }> ADICIONAR </button>
                            <button onClick={ AdicionarProduto }> ADICIONAR </button>

*/