import Email from '../../assets/img/email.png';
import Facebook from '../../assets/img/facebook.png';
import Instagram from '../../assets/img/instagram.png';
import Twitter from '../../assets/img/twitter.png';
import Pinterest from '../../assets/img/pinterest.png';
import Biriri from '../../assets/img/biriri.png';
import Telefone from '../../assets/img/telefone.png';

import './index.scss';



export default function Rodape() {
    return (
        <section className="Rodape">
            <div className="Duvidas">

                <h1> DÚVIDAS </h1>                    

                <p> Onde esta meu pedido </p>
                <p> Guia de diamantes </p>
                <p> Guia de tamanho de aro </p>
                <p> Gerenciamento de dados pessoais </p>
                <p> Garantias, trocas e devoluções </p>

            </div>
            <div className="Newsletter">

                <h1> NEWSLETTER </h1>
                <h2> Fique por dentro das novidades da Joyeria Cristallo </h2>

                <div className="Email">
                    <h3> Assine nosso newsletter </h3>
                    <img src={Email} alt="email" />
                </div>

                    <div className="Redes-Sociais">
                        <img src={Facebook} alt="facebook" />
                        <img src={Instagram} alt="instagram" />
                        <img src={Twitter} alt="twitter" />
                        <img src={Pinterest} alt="pinterest" />
                    </div>

            </div>
            <div className="Atendimento">

                <h1> ATENDIMENTO </h1>

                <div>
                    <h2> +55 11 912345678 </h2>
                    <img src={Biriri} alt="biriri" />
                </div>
                <div>
                    <h2>+55 5922-0635 </h2>
                    <img src={Telefone} alt="telefone" />
                </div>
                
                <div>
                    <h2> concierge@joyeriacristallo.com.br </h2>
                    <img src={Email} alt="email" />
                </div>

            </div>
        </section>
    );
}