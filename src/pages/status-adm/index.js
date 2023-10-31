import './index.scss';
import Cabecalho from '../../components/cabecalhoAdm';
import Lateral from '../../components/lateralAdm';
import Anel from '../../assets/img/anel.svg'


export default function StatusAdm() {



    return (


        <div className='pagina-statusadm'>
            <Lateral />

            <div className='cabeca'>
                <Cabecalho />
                <section>

                    <main>
                        <div className='editor'>
                            <h1>EDITOR DE STATUS</h1>
                            <input type="text" placeholder='Cod. Produto' />
                        </div>

                        <div className='status-produto'>
                            <div className='status'>
                                <h1>Status:</h1>
                                <select>
                                    <option>Pagamento</option>
                                    <option>Aprovado</option>
                                    <option>Reprovado</option>
                                </select>
                                <select>
                                    <option>Envio</option>
                                    <option>Aguardando...</option>
                                    <option>A caminho</option>
                                </select>
                                <button>SALVAR</button>
                            </div>

                            <div className='produto'>
                                <h1>Produto:</h1>

                                <div className='produto-imagem'>
                                    <img src={Anel} alt='' />
                                    <p>Anel solitário de ouro 18k</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    );
}