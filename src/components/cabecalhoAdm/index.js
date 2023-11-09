import './index.scss';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Barras from "../../assets/img/i-bars.svg";
import Home from "../../assets/img/i-casa.png";
import Exit from "../../assets/img/i-exitB.png";

import storage from 'local-storage';



export default function CabecalhoAdm() {

    
    const [aparecer, setDisplay] = useState('none')
    
    function alternarMenu(){
        if(aparecer === 'flex'){
            setDisplay('none')
        }

        else{
            setDisplay('flex');
        }
    }
   
    const navigate = useNavigate()


    useEffect(() => {
        if (!storage('adm-logado')) {
            navigate('/login-adm')
        }
    }, [])

    return (
        <div className='comp-CabecalhoAdm'>
            <nav>
                <img onClick={alternarMenu} src={Barras} alt="" />

                <article style={{ display: aparecer}}>
                    <Link to='/home-adm'>
                        <img src={Home} alt="casa" />
                    </Link>

                    <Link to='/login-adm'>
                         <img src={Exit} alt="sair" />
                    </Link>
                </article>

                <img src="/assets/img/i-settings.png" alt="" />
                <input type='text' placeholder='Procure o Pin' />

            </nav>
        </div>
    )
}