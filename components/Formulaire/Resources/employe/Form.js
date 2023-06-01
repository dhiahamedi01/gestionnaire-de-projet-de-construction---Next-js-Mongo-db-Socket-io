import style from "@/styles/Responsable.module.css";
import styles from "@/styles/Resource.module.css";
import domain from "@/utils/config";
import axios from "axios";
import emp from './infoEmp'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect, useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const Form = ({information,test}) => {
  
  const [info, setinfo] = useState(emp());
  const [nom, setnom] = useState('')
  const [prenom, setprenom] = useState('');
  const [tel, settel] = useState('');
  const [type, settype] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [price, setprice] = useState(null)
  const [RIB, setRIB] = useState(null)
  const [CIN, setCIN] = useState(null)
  {/***** Envoi Tous les donnés du Projet en Backend ******/ }

  const send = async () => {
    const Employe = { nom, prenom, tel, price,type,email,password,RIB}
    try {
      await axios.post(`${domain}/resource/Employe`, Employe);
      alert(' employée est ajouté ');
      //Vider les Donné de formulaire
       setnom(''); setprenom(''); settel(null); setprice(null);settype('');
    } catch (error) {
      setnom(''); setprenom(''); settel(null); setprice(null);settype('');
      alert('il y a une probleme  ')
      console.log(error);
    }
  };
  {/**************FIN Envoi****************/ }


  {/***** Envoi Tous les donnés du Projet en Backend ******/ }

  const modif = async () => {
    const Employe = { nom, prenom, tel,price,type,email,password,RIB}
    try {
      await axios.put(`${domain}/resource/Employe/${information._id}`, Employe);
      alert(' employée est modifier ');
   
    } catch (error) {
      alert('il y a une probleme  ')
      console.log(error);
    }
  };
  {/**************FIN Envoi****************/ }


  useEffect(() => {
    setnom(information?.nom || '');
    setprenom(information?.prenom || '');
    settel(information?.tel || '');
    settype(information?.type || '');
    setemail(information?.email || '');
    setprice(information?.price || null);
    setRIB(information?.RIB || null);
  }, [information]);
  


  return (
    <>
    <form className={style.form}> 
    <h1 className={style.title2}>Ajouter employée</h1>
    <div className={style.sousForm}>
      <div className={style.groupe1}>
      <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="Nom"
          multiline
          value={nom} onChange={(e) => setnom(e.target.value)}
          maxRows={4}
        />
        <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="Prenom"
          multiline
          value={prenom} onChange={(e) => setprenom(e.target.value)}
          maxRows={4}
        />
      </div>


      <div className={style.groupe1}>
                  <FormControl className={style.input}>
                  <InputLabel htmlFor="outlined-adornment-amount"><h4>téléphone</h4></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">+216</InputAdornment>}
                    label="téléphone"
                    type="number"
                    value={tel} onChange={(e) => settel(e.target.value)}
                  />
                </FormControl>
                <FormControl  className={style.input}>
                  <InputLabel htmlFor="outlined-adornment-amount" ><h4>Prix emp</h4></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                    type="number"
                    value={price} onChange={(e) => setprice(e.target.value)}
                  />
                </FormControl>
      </div>

      <div className={style.groupe1}>
      <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          value={email} onChange={(e) => setemail(e.target.value)}
          maxRows={4}
        />
        <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="Password"
          type="password"
          value={password} onChange={(e) => setpassword(e.target.value)}
          maxRows={4}
        />
      </div>


      <div className={style.groupe1}>
        <FormControl className={style.input}>
                  <InputLabel htmlFor="outlined-adornment-amount"><span>RIB banque</span></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="téléphone"
                    type="number"
                    value={RIB} onChange={(e) => setRIB(e.target.value)}
                  />
      </FormControl>
      <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="CIN"
          multiline
          value={CIN} onChange={(e) => setCIN(e.target.value)}
          maxRows={4}
        />
      </div>
      <div className={style.groupe1}>
      <FormControl className={style.Radio}>
          <FormLabel id="demo-row-radio-buttons-group-label" style={{color:"black"}}>Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
           
          >
            <FormControlLabel value="Responsable"
            onChange={(e) => settype(e.target.value)} control={<Radio/>} label="Responsable" />&ensp;&ensp;
            <FormControlLabel value="Directeur" 
            onChange={(e) => settype(e.target.value)}control={<Radio />} label="Directeur" />
          </RadioGroup>
     </FormControl>
     </div>

     <Button variant="contained" disableElevation className={style.btn} onClick={test=="modif"? modif:send}>
        <h3 className={style.title2}>{test === "modif" ? 'Modifier employée' : 'Ajouter employée'}</h3>
      </Button>
    </div>
  </form>
  </>
  );
};

export default Form;
