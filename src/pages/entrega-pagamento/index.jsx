import './index.scss';


import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import Resumo from '../../components/resumo';
import storage from 'local-storage'

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import { concluirPedido, inserirItensPedido, InserirEndereco } from '../../api/UsuarioAdd';

export default function EntregaPagamento() {
    const [pedido, setPedido] = useState({});


    const [ nome, setNome ] = useState();
    const [ enderecoRua, setEnderecoRua ] = useState();
    const [ cep, setCep ] = useState();
    const [ numeroCasa, setNumeroCasa ] = useState();
    const [ complemento, setComplemento ] = useState();
    const [ bairro, setBairro ] = useState();
    const [ cidade, setCidade ] = useState();
    const [ estado, setEstado ] = useState();


    useEffect(() => {
        setPedido(storage('usuario-pedido'))

        // eslint-disable-next-line
    }, []);



    async function adicaoEndereco() {
        try {
            
            const resp = InserirEndereco(nome, enderecoRua, cep, numeroCasa, complemento, bairro, cidade, estado)

        } catch (error) {
            if (error.response)
            toast.error(error.response.data.erro);
        }
    }


    async function finalizarPedido() {
        try{
            adicaoEndereco();
            const id = storage('usuario-logado').cliente_id


            const resp = await concluirPedido({cliente: id, total: storage('usuario-pedido').total})
            const respItens = await inserirItensPedido(storage('usuario-pedido').carrinho, resp.id)
            toast.done('Pedido finalizado');
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    };

    return (


        <div className='pagina-entrega'>
            <Cabecalho />

            <main>
                <div className='entrega'>
                <h1>INFORMAÇÕES DA ENTREGA</h1>

                    <div className="informacoes">
                    
                        <input type="text" placeholder='Nome Completo' value={nome} onChange={e => setNome(e.target.value)}/>
                        <input type="text" placeholder='Endereço' value={enderecoRua} onChange={e => setEnderecoRua(e.target.value)}/>

                        <div className='cep'>
                            <input type="text" placeholder='CEP'  value={cep} onChange={e => setCep(e.target.value)}/>
                            <input type='text' placeholder='Número'  value={numeroCasa} onChange={e => setNumeroCasa(e.target.value)}/>
                        </div>

                        <div className='bairro'>
                            <input type='text' placeholder='Complemento'  value={complemento} onChange={e => setComplemento(e.target.value)}/>
                            <input type='text' placeholder='Bairro'  value={bairro} onChange={e => setBairro(e.target.value)}/>
                        </div>

                        <div className='cidade'>
                            <input type='text' placeholder='Cidade'  value={cidade} onChange={e => setCidade(e.target.value)}/>
                            <input type='text' placeholder='Estado' value={estado} onChange={e => setEstado(e.target.value)} />
                        </div>

                        <button onClick={adicaoEndereco}> Sla </button>

                    </div>

                    <div className='contato'>
                        <h1>INFORMAÇÕES DE CONTATO</h1>
                        <input type='text' placeholder='Email' />
                        <input type='texto' placeholder='Número de telefone' />
                        <input type='text' placeholder='CPF' />
                    </div>
                </div>

                <div className='pagamento'>
                <h1>PAGAMENTO</h1>

                    <Resumo />
                    
                    <div>
                        <div className='head-cartao'>
                            <div className='credito'>
                                <p>Cartão de crédito</p>
                            </div>
                            <div className='boleto'>
                                <p>Boleto</p>
                            </div>
                            <div className='debito'>
                                <p>Débito</p>
                            </div>
                        </div>
                    </div>
                    <div className='cartao-informacao'>


                        <div className='credito-informacao'>
                            <div className='credito-input'>
                                <h2>Número do cartão</h2>
                                <input type='text' placeholder='Número do cartão' />

                                <h2>CPF</h2>
                                <input type='text' placeholder='CPF' />
                            </div>

                            <div className='date-verificacao'>
                                <div className='validade'>
                                    <h2>Validade</h2>
                                    <input type='date' placeholder='DD/MM/YY' />
                                </div>
                                <div className='cvv'>
                                    <h2>Código de verificação</h2>
                                    <input type='text' placeholder='CVV' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='botao'>
                        <button onClick={finalizarPedido}>EFETUAR PAGAMENTO</button>
                    </div>
                </div>
            </main>

            <Rodape />
        </div>
    );
}