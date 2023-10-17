import './index.scss';
import 'react-toastify/dist/ReactToastify.css';


import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';


import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { cadastrarJoia, AdicionarImg } from '../../api/admAdd'


export default function Edicao(){

    const [ nome, setNome ] = useState();
    const [ preco, setPreco ] = useState();
    const [ categoria, setCategoria ] = useState();
    const [ subcategoria, setSubCategoria ] = useState();
    const [ estoque, setEstoque ] = useState();
    const [ composicao, setComposicao ] = useState();
    const [ detalhes, setDestalhes ] = useState();
    const [ disponivel, setDisponivel ] = useState(false);

    const [ imagem, setImagem ] = useState()



    async function AdicionarProduto() {
        try {
            
            const resp = await cadastrarJoia( nome, preco, categoria, subcategoria, estoque, composicao, detalhes, disponivel );
            toast.success('Sucesso')

        } catch (error) {
            toast.error(error.response.data.erro);
        }
    };

    async function AdicionarImg() {
        try {
            
            const resp = await AdicionarImg(imagem);

        } catch (error) {
            toast.error(error.response.data.erro);
        }
    }



    return(
        <div className='pagina-edicao'>
            <Lateral/>
            <ToastContainer />

            <main>
                <CabecalhoAdm/>

                <div className='s1'>

                    <article className='cont-1'>
                        <h1>ANEXAGEM DOS PRODUTOS NO BANCO DE DADOS</h1>
                    </article>

                    <article className='cont-2'>
                        <section>    
                            <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                            <input type="text" placeholder='Valor' value={preco} onChange={e => setPreco(e.target.value)}/>
                            <input type="text" placeholder='Categoria' value={categoria} onChange={e => setCategoria(e.target.value)}/>
                            <input type="text" placeholder='Sub-Categoria' value={subcategoria} onChange={e => setSubCategoria(e.target.value)}/>
                            <input type="text" placeholder='Estoque' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                            <textarea placeholder='Composição'value={composicao} onChange={e => setComposicao(e.target.value)} />
                            <textarea placeholder='Detalhes' value={detalhes} onChange={e => setDestalhes(e.target.value)}/>

                            <div>   

                                <input type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                                <p> Disponivel </p>

                            </div>

                            <button onClick={ AdicionarProduto }> ADICIONAR </button>
                            
                        </section>

                        <aside>
                            <article >
                                <h1>imagens.png</h1>

                               <div className='bt-img'>
                                    <button onClick={ AdicionarImg }>
                                        <img src="/assets/img/plus.png" alt="ms" />
                                    </button>
                                </div> 
                            </article>
                        </aside>
                    </article>
                </div>
            </main>
        </div>
    )
}