import './index.scss';
import Lateral from "../../components/lateralAdm";
import CabecalhoAdm from '../../components/cabecalhoAdm';

export default function HomeAdm() {
    

    return (
        <section className="Pagina-HomeAdm">
           <Lateral/>

            <main>
                <CabecalhoAdm/>
                <section>

                </section>
            </main>
        </section>
    );
}