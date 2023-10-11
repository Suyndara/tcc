import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import storage from 'local-storage';

export default function CabecalhoAdm(){

    const navigate = useNavigate()

    useEffect(() => {
        if (!storage('adm-logado')) {
            navigate('/login-adm')
        }
    }, [])

    return(
        <div className='comp-CabecalhoAdm'>   
            <nav>
                <span>
                
                </span>

                <img src="/assets/img/i-settings.png" alt="" />
                <input type='text' placeholder='Procure o Pin'/>
            </nav>
        </div>
    )
}