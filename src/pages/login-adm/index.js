import './index.scss';
import Joyeria from '../../assets/img/logo.svg';



export default function LoginAdm (){


    return(
        
        
        <div className='pagina-loginAdm'>
            <img src={Joyeria} />

            <section className='inputs'>
            <article className="atributo">
                    <input type="text" placeholder='Administrador' />      
            </article>

            <article className="atributo">
            <input type='text' placeholder='Senha' />
            </article>
            </section>

            <button>LOGAR</button>
        </div>
    );
}