import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

export default function Guia() {

    return (
        <div className='pagina-guia'>
            <Cabecalho />

            <main>
                <h1>Guia de Diamantes</h1>

                <h2>Nossos Diamantes são Verdadeiros e Autênticos</h2>

                <p>Deslumbrantes e autênticos, nossos diamantes se destacam pela sua qualidade e excelência.Na Casa São Paulo, atendemos os padrões mais rigorosos durante a produção de nossas joias.Apenas diamantes criteriosamente selecionados podem ser colocados na icônica caixinha do amor da Casa São Paulo®.</p>

                <h2>Os 4 C's dos Diamantes</h2>

                <p>Cada diamante apresenta uma identidade única. A fim de classificá-los, a GIA criou os 4Cs – lapidação ("cut"), pureza ("clarity"), cor ("color") e peso em quilates ("carat weight") - Os 4C's funcionam como um método globalmente aceito para avaliar a qualidade de um diamante. Na Casa São Paulo, aceitamos somente os melhores, com o mais alto padrão e qualidade.</p>

                <img src="/assets/img/dimas.png" alt="dimas" />

                <h2>Cor</h2>

                <p>A cor é a segunda característica mais importante dos 4Cs, porque a classificação da cor afeta diretamente a aparência da pedra. Diamantes com classificação de cor ruim podem parecer ligeiramente amarelos em vez de apresentarem o desejado branco brilhante.</p>

                <img src="/assets/img/cordima.png" alt="cord" />
            </main>

            <Rodape />
        </div>
    )
}