import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import Resumo from '../../components/resumo';


export default function EntregaPagamento() {


    return (


        <div className='pagina-entrega'>
            <Cabecalho />

            <main>
                <div className='entrega'>
                    <h1>INFORMAÇÕES DA ENTREGA</h1>

                    <div className="informacoes">
                        <input type="text" placeholder='Nome Completo' />
                        <input type="text" placeholder='Endereço' />

                        <div className='cep'>
                            <input type="text" placeholder='CEP' />
                            <input type='text' placeholder='Número' />
                        </div>

                        <div className='bairro'>
                            <input type='text' placeholder='Complemento' />
                            <input type='text' placeholder='Bairro' />
                        </div>

                        <div className='cidade'>
                            <input type='text' placeholder='Cidade' />
                            <input type='text' placeholder='Estado' />
                        </div>
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
                                    <input type='text' placeholder='DD/MM/YY' />
                                </div>
                                <div className='cvv'>
                                    <h2>Código de verificação</h2>
                                    <input type='text' placeholder='CVV' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='botao'>
                        <button>EFETUAR PAGAMENTO</button>
                    </div>
                </div>
            </main>

            <Rodape />
        </div>
    );
}