import styles from "../../../../styles/NewProjectCard.module.css";
import style from "../../../../styles/Resource.module.css";
import domain from "@/utils/config";
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";

const Form = ({infoMat}) => {
  const [mat,setmat]=useState(infoMat.mat);
  const [nom,setnom] = useState(infoMat.nom)
  const [desc,setdesc] = useState(infoMat.desc)
  const [price,setprice] = useState(infoMat.price)

 
  {/***** Envoi Tous les donnés du Projet en Backend ******/}

  const modif = async () => {
    const Matriel={mat,nom,desc,price}
    try {
      await axios.put(`${domain}/Addmatriel/${infoMat._id}`,Matriel);
      alert('Le matriel est modifier ');
      //Vider les Donné de formulaire
      setmat(null);setnom('');setdesc('');setdesc('');setprice(null);
    }catch (error) {
        setmat(null);setnom('');setdesc('');setdesc('');setprice(null);
      alert('il y a une probleme  ')
      console.log(error);
    }
  };
{/**************FIN Envoi****************/}

  return (
    <form className={style.form}>
      <h1 className={style.title}>modifier Matrieaux</h1>
      <div className={style.sousform}>
      <TextField
        className={style.nom}
        id="outlined-multiline-flexible"
        label="Nom de matriel"
        multiline
        value={nom} onChange={(e) => setnom(e.target.value)}
        maxRows={4}
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        value={desc} onChange={(e) => setdesc(e.target.value)}
        className={style.desc}
      />

      <div className={style.two}>

      <FormControl fullWidth sx={{ m: 1 }} className={style.price}>
          <InputLabel htmlFor="outlined-adornment-amount"><h3>Prix</h3></InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            type="number"
            value={price} onChange={(e) => setprice(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} className={style.Quant}>
          <InputLabel htmlFor="outlined-adornment-amount"><h3>Quantité</h3></InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">kg</InputAdornment>}
            label="Amount"
            type="number"
            value={mat} onChange={(e) => setmat(e.target.value)}
          />
        </FormControl>
        </div>
        </div>
        <Button variant="contained" disableElevation className={style.ajoute} onClick={modif}>
          <h3>modifier matériel</h3>
        </Button>
    </form>
  );
};

export default Form;
