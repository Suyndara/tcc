import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

export default function Politica(){

    return(
        <div className='pagina-politica'>
            <Cabecalho/>

            <main>
                <p>Nossa Política de Garantia, Trocas e Devoluções é baseada no Código de Defesa ao Consumidor.</p>
                
                <p>Caso haja a necessidade de acionar a garantia ou realizar a troca/devolução de alguma peça, entre em contato conosco pelo WhatsApp (11) 99999-9999 e nos envie uma foto nítida da peça com problema para que possamos resolver a questão da melhor forma possível.</p>
                
                <p>Se necessário solicitamos a devolução da peça para uma análise mais detalhada, esse envio é por nossa conta. Chegando em nosso Centro de Distribuição, enviaremos a solicitação para análise, após a conclusão, havendo indícios de mau uso do produto, a Cristal de Rocha se isenta de aceitar a solicitação da devolução ou troca do produto. Em caso de defeito de fabricação, será feito o reenvio de um novo produto em perfeito estado para o cliente. Caso o produto escolhido não esteja mais disponível em estoque, o cliente poderá optar pelo cancelamento e ressarcimento do valor da compra (O valor pago no PIX é devolvido em 3 dias úteis e para cancelamentos de pagamentos por cartão de crédito o prazo é de 7 dias úteis) ou optar por um vale compras.</p>
                
                <p>As joias consideradas fora da garantia são:</p>
                <p className="topico">• Escurecidas por sujeira;
                    <br/>• Quebradas;
                    <br/>• Incompletas;
                    <br/>• Arranhadas;
                    <br/>• Arrebentadas;
                    <br/>• Amassadas;
                    <br/>• Avermelhadas;
                    <br/>• Com pedras opacas ou leitosas;
                    <br/>• Por mau uso;
                    <br/>• Desgastadas por uso constante;
                    <br/>• Desprendimento ou escurecimento da resina.
                </p>
                
                <p>Joias consideradas em garantia <br/>são:</p>
                <p>
                    <br/>• Com qualquer defeito de fabricação;
                    <br/>• Com desprendimento total ou parcial do folheado;
                    <br/>• Com rupturas ou rachaduras de fechos e soldas.
                </p>
            </main>
            <Rodape/>
        </div>
    )
}