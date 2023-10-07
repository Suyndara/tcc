import './index.scss';
import CabecalhoADM from '../../components/cabecalhoAdm';
import LateralADM from '../../components/lateralAdm';
import Opcoes from '../../components/opcoes';



export default function VendasADM(){



    return(


        <div className='pagina-vendasADM'>
            <LateralADM />
            <section>
                <CabecalhoADM />
                <Opcoes />
            </section>
        </div>
    );
}