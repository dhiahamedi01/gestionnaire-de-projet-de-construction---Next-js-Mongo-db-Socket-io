import style from "@/styles/Responsable.module.css";
import domain from "@/utils/config";
import axios from "axios";
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';



const socket = io('http://localhost:3001', {
  transports: ['websocket'],
  withCredentials: true,
});




const Form = ({infodate}) => {
  const [Conso,setConso]=useState(null);
  const [prixEqu,setprixEqu] = useState(null)
  const [prixEmp,setprixEmp] = useState(null)
  const [NbrUnit,setNbrUnit] = useState(null)
  const [Date, setdate] = useState(infodate.toISOString());

  {/***** Envoi Tous les donnés du Projet en Backend ******/}

    const send = async () => {
      const Pointage={Conso,prixEqu,prixEmp,NbrUnit,Date}
      try {
        console.log("date")
        console.log(Date)
        await axios.post(`${domain}/Pointage`,Pointage);
        alert('Le resource est ajouté ');
        //Vider les Donné de formulaire
        setConso(null);setprixEqu(null);setprixEmp(null);setNbrUnit(null);setdate(null);
        router.reload()
      }catch (error) {
        setConso(null);setprixEqu(null);setprixEmp(null);setNbrUnit(null);setdate(null);
        alert('il y a une probleme  ')
        console.log(error);
      }
    };
  {/**************FIN Envoi****************/}

  const Submit = (e) => {
    e.preventDefault();

    
    const pointage = {
      Conso,
      prixEqu,
      prixEmp,
      NbrUnit,
      Date
    };

    socket.emit('Pointage', pointage );
  };



  return (
    <form className={style.form}> 
      <div className={style.sousForm}>
        <div className={style.groupe1}>
          <FormControl className={style.input}>
            <InputLabel htmlFor="outlined-adornment-amount"><span>Consomation matriel</span></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">KG</InputAdornment>}
              label="Consomation matriel"
              type="number"
              value={Conso} onChange={(e) => setConso(e.target.value)}
            />
          </FormControl>
          <FormControl className={style.input}>
            <InputLabel htmlFor="outlined-adornment-amount"><span>Prix des employées</span></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">TND</InputAdornment>}
              label="Prix des employées"
              type="number"
              value={prixEmp} onChange={(e) => setprixEmp(e.target.value)}
            />
          </FormControl>
        </div>


        <div className={style.groupe1}>
           <FormControl className={style.input}>
            <InputLabel htmlFor="outlined-adornment-amount"><span>Prix d'equipement</span></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">TND</InputAdornment>}
              label="Prix d'equipement"
              type="number"
              value={prixEqu} onChange={(e) => setprixEqu(e.target.value)}
            />
          </FormControl>
          <FormControl className={style.input}>
            <InputLabel htmlFor="outlined-adornment-amount"><span>Nombre d'unite</span></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">M3</InputAdornment>}
              label="Nombre d'unite"
              type="number"
              value={NbrUnit} onChange={(e) => setNbrUnit(e.target.value)}
            />
         </FormControl>
        </div>
        <Button variant="contained" color="success" className={style.btn} onClick={Submit}>
         <h3 className={style.title2}>Pointer</h3>
       </Button>
      </div>
    </form>
  );
};

export default Form;
