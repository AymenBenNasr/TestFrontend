import React, { useState } from 'react';
import "./Credit.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form  , Button } from 'react-bootstrap';



const Credit = () => {
  const url = "https://localhost:7286/api/Credit"
  const[montant_achat , setMantant] = useState()
  const[fonds_propres , setFond] = useState()
  const[duree , setDuree] = useState()
  const[Taux , setTaux] = useState()

  //Output
  const[Frais_achat , setFrais] = useState()
  const[Montant_Brut , setBrut] = useState()
  const[Montant_Net , setNet] = useState()
  const[Frais_hypotheque , setHyp] = useState()
  const[Taux_mensuel , setTauxMen] = useState()
  const[Mensualite , setMensualite] = useState()
  
  const [ta, setTa] = useState([]);

  const submitValue = () => {
    let data = {
        'montant_achat' : montant_achat,
        'fonds_propres ' : fonds_propres,
        'duree' : duree,
        'Taux' : Taux
    }
    console.log(data);
}
function submit(e) {
  e.preventDefault();
  
     axios.post(url,{
      montant_achat : montant_achat,
      fonds_propres : fonds_propres,
      duree : duree,
      Taux : Taux
  
    }).then((response) => {
      console.log(response.data);
    })
  };

  return (
    <>
    
      <div class="form-group" >
      
        <label class="col-form-label mt-4" for="inputDefault">Montant D'achat</label>
        
        <input type="text" class="form-control" placeholder="Montant D'achat" id="Mantant" onChange={e => setMantant(e.target.value)}/>

        <label class="col-form-label mt-4" for="inputDefault">Fonds Propres</label>
        
        <input type="text" class="form-control" placeholder="Fonds Propres" id="Fond" onChange={e => setFond(e.target.value)} />

        <label class="col-form-label mt-4" for="inputDefault">Durée du crédit</label>
        
        <input type="text" class="form-control" placeholder="Durée du crédit" id="duree" onChange={e => setDuree(e.target.value)} />

        <label class="col-form-label mt-4" for="inputDefault">Taux Annuel</label>
        
        <input type="text" class="form-control" placeholder="Taux Annuel" id="Taux" onChange={e => setTaux(e.target.value)} />

        <div className='buttonSubmit'><button type="submit" class="btn btn-primary" onClick={(e)=> submit(e)} >Calculer</button></div>
        
        </div>
        <div>
        
          
        </div>
      

    
    </>
      );
      
 
};

export default Credit;

