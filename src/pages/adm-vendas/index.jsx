import './index.scss';
import CabecalhoADM from '../../components/cabecalhoAdm';
import LateralADM from '../../components/lateralAdm';
import Opcoes from '../../components/opcoes';



export default function VendasADM() {



  return (


    <div className='pagina-vendasADM'>
      <LateralADM />
      <section>
        <CabecalhoADM />
        <Opcoes />

        <div className='sas'>
          <div className='tabela'>
            
            <table>
              <thead>
                <tr>
                  <th> produto </th>
                  <th> cliente </th>
                  <th> total </th>
                  <th> status </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <button>VERIFICAR</button>
        </div>
      </section>
    </div>
  );
}