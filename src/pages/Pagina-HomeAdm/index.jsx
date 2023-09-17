import './index.scss';
import Lateral from "../../components/lateralAdm";
import CabecalhoAdm from '../../components/cabecalhoAdm';
import Opcoes from '../../components/opcoes';

export default function HomeAdm() {
    

    return (
        <section className="Pagina-HomeAdm">
           <Lateral/>

            <main>
                <CabecalhoAdm/>

                <Opcoes/>
                <section>

                </section>
            </main>
        </section>
    );
}