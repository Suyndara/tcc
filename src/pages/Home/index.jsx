import Carrossel from '../../components/carrossel';
import Cabecalho from '../../components/cabecalho';
import './index.scss';


export default function Home() {
    
    return(
        <div className='pagina-home'>
            <Cabecalho/>
            
            <Carrossel/>
        </div>
    )
}