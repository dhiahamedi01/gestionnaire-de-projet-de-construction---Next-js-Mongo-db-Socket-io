import style from "@/styles/Responsable.module.css";
import styles from "@/styles/Resource.module.css";
import domain from "@/utils/config";
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect, useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3001', {
  transports: ['websocket'],
  withCredentials: true,
});


const Form = ({information,test}) => {
  const [employer, setemployer] = useState(false);
  const [info, setinfo] = useState([]);
  const [info2, setinfo2] = useState([]);
  const [nom, setnom] = useState('')
  const [projet,setprojet]=useState('')
  const [typeActiv, settypeActiv] = useState('');
  const [Responsable, setResponsable] = useState('');
  const [priceM, setpriceM] = useState('');
  const [priceT, setpriceT] = useState('');
  const [Unite, setUnite] = useState('');
  const [NBR, setNBR] = useState(null);
  const [DateD,setDateD] = useState(null)
  const [DateF,setDateF] = useState(null)
  const [Activite,setActivite] = useState([])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('Activite', (Activite) => {
      setActivite((prevActivite) => [...prevActivite, Activite]);
    });

    return () => {
      socket.off('connect');
      socket.off('Activite');
    };
  }, []);
  const send = async () => {
    const Activite = {nom,projet,typeActiv,Responsable,priceM,priceT,Unite,NBR,DateD,DateF};
  socket.emit('Activite',Activite);
 }



  {/***** Envoi Tous les donnés du Projet en Backend ******/ }

  const modif = async () => {
    const Employe = {nom,projet,typeActiv,Responsable,priceM,priceT,Unite,NBR,DateD,DateF}
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
        async function fetchData() {
            try {
                const response = await axios.get(`${domain}/resource/Employe`);
                setinfo(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchData();
      }, []);

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`${domain}/Addproject`);
            setinfo2(response.data);  
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
    }, []);
        


  const INFO = [
    { label: 'Heure', id: 1 },
    { label: 'Mètre carré', id: 2 },
    { label: 'Mètre linéaire', id: 3 },
    { label: 'Kilowatt-heure', id: 4 },
  ];
  const INFO2 = [
    { label: 'Électricité ', id: 1 },
    { label: 'Revêtements ', id: 2 },
    { label: 'Finitions ', id: 3 },
    { label: 'Terrassement', id: 4 },
    { label: 'forage ', id: 5 },
    { label: 'Aménagement paysager', id: 6 },
  ];
  return (
    <>
    <form className={style.form}> 
    <h1 className={style.title2}>{test} Activite</h1>
    <div className={style.sousForm}>
      <div className={style.groupe1}>
      <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="Nom d'activite"
          multiline
          value={nom} onChange={(e) => setnom(e.target.value)}
          maxRows={4}
        />
           <Autocomplete
            className={style.input}
            disablePortal
            id="combo-box-demo"
            options={INFO}
            sx={{ width: 1000 }}
            value={Unite}  onChange={(e, newValue)=>setUnite(newValue)}
            renderInput={(params) => <TextField {...params} label="Unité Activite" />}
          />
      </div>


      <div className={style.groupe1}>
            <Autocomplete
              className={style.input}
              disablePortal
              id="combo-box-demo2"
              options={info.map((item) => item.email)}
              sx={{ width: 1000 }}
              value={Responsable}
              onChange={(e, newValue) => setResponsable(newValue)}
              renderInput={(params) => <TextField {...params} label="Responsable d'activité" />}
            />
        <Autocomplete
            className={style.input}
            disablePortal
            id="combo-box-demo"
            options={INFO2}
            sx={{ width: 1000 }}
            value={typeActiv}  onChange={(e, newValue)=>settypeActiv(newValue)}
            renderInput={(params) => <TextField {...params} label="Type d'activite" />}
          />
      </div>


      <div className={style.groupe1}>
      <Autocomplete
              className={style.input}
              disablePortal
              id="combo-box-demo2"
              options={info2.map((item) => item.nom)}
              sx={{ width: 1000 }}
              value={projet}
              onChange={(e, newValue) => setprojet(newValue)}
              renderInput={(params) => <TextField {...params} label="Le projet" />}
            />
      <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="Nombre des travailleur"
          type="Number"
          value={NBR} onChange={(e) => setNBR(e.target.value)}
          maxRows={4}
        />
      </div>
      
      <div className={style.groupe1}>
      <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="prix totale des matriels"
          type="Number"
          maxRows={4}
          value={priceM} onChange={(e) => setpriceM(e.target.value)}
        />
         <TextField
          className={style.input}
          id="outlined-multiline-flexible"
          label="prix totale des travailleurs"
          type="Number"
          value={priceT} onChange={(e) => setpriceT(e.target.value)}
          maxRows={4}
        />
      </div>
      <div className={style.groupe1}>
      <FormControl className={style.input}>
            <InputLabel htmlFor="outlined-adornment-amount"><span>Date debut</span></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label="Date debut"
              type="Date"
              value={DateD} onChange={(e) => setDateD(e.target.value)}
            />
      </FormControl>
      <FormControl className={style.input}>
            <InputLabel htmlFor="outlined-adornment-amount"><span>Date fin</span></InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start"></InputAdornment>}
              label="Date fin"
              type="Date"
              value={DateF} onChange={(e) => setDateF(e.target.value)}
            />
         </FormControl>
      </div>
     <Button variant="contained" disableElevation className={style.btn} onClick={send}>
        <h3 className={style.title2}>{test === "Modifier" ? 'Modifier Activite' : 'Ajouter Activite'}</h3>
      </Button>
    </div>
  </form>
  </>
  );
};

export default Form;
