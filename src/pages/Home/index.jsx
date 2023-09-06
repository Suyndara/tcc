import Cabecalho from '../../components/cabecalho';
import Carrossel from '../../components/carrossel';
import './index.scss';


export default function Home() {
    
    return(
        <div className='pagina-home'>
            <Cabecalho/>
            
            <Carrossel/>
        </div>
    )
}