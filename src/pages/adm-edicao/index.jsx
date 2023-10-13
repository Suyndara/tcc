import './index.scss';
import 'react-toastify/dist/ReactToastify.css';


import Lateral from '../../components/lateralAdm';
import CabecalhoAdm from '../../components/cabecalhoAdm';


import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { CadastrarJoia, AdicionarImg } from '../../api/admAdd.js'


export default function Edicao(){

    const [ nome, setNome ] = useState('');
    const [ preco, setPreco ] = useState();
    const [ categoria, setCategoria ] = useState();
    const [ subCategoria, setSubCategoria ] = useState();
    const [ estoque, setEstoque ] = useState();
    const [ composicao, setComposicao ] = useState('');
    const [ detalhes, setDestalhes ] = useState('');
    const [ disponivel, setDisponivel ] = useState(false);

    const [ imagem, setImg ] = useState();



    async function AdicionarProduto() {
        try {
            
            const resp = await CadastrarJoia( nome, preco, disponivel, estoque, composicao, detalhes, categoria, subCategoria );

            toast.done('Filme Cadastrado');

        } catch (error) {
            toast.error(error.message);
        }
    };



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
                            <input type="text" placeholder='Sub-Categoria' value={subCategoria} onChange={e => setSubCategoria(e.target.value)}/>
                            <input type="number" placeholder='Qtd. Inicial' value={estoque} onChange={e => setEstoque(e.target.value)}/>
                            <textarea placeholder='Composição'value={composicao} onChange={e => setComposicao(e.target.value)} />
                            <textarea placeholder='Detalhes' value={detalhes} onChange={e => setDestalhes(e.target.value)}/>

                            <div>

                                <input type="checkbox" value={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                                <p> Disponivel </p>

                            </div>

                            <button onClick={ AdicionarProduto }> ADICIONAR </button>
                            
                        </section>

                        <aside>
                            <article>
                                <h1>imagens.png</h1>

                               <div className='bt-img'>
                                    <button>
                                        <img src="/assets/img/plus.png" alt="ms" value={imagem} onChange={e => setImg(e.target.value)}/>
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