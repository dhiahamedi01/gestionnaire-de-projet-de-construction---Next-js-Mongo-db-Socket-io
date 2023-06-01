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

const Update = ({information}) => {
  const [Unit,setUnit]=useState(information.Unit);
  const [nom,setnom] = useState(information.nom)
  const [desc,setdesc] = useState(information.desc)
  const [price,setprice] = useState(information.price)

  {/***** Envoi Tous les donnés du Projet en Backend ******/}

    const modif = async () => {
      const Resource={Unit,nom,desc,price}
      try {
        await axios.put(`${domain}/resource/equipement/${information._id}`,Resource);
        alert('Le resource est ajouté ');
        //Vider les Donné de formulaire
        setUnit('');setnom('');setdesc('');setdesc('');setprice(0);
      }catch (error) {
        setUnit('');setnom('');setdesc('');setdesc('');setprice(0);
        alert('il y a une probleme  ')
        console.log(error);
      }
    };
{/**************FIN Envoi****************/}

  return (
    <form className={style.form}>
      <h1 className={style.title}>modifier l'équipement</h1>
      <div className={style.sousform}>
      <TextField
        className={style.nom}
        id="outlined-multiline-flexible"
        label="Nom de resource"
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
        <div className={style["select-wrapper"]}>
      <select id="unit" name="unit" value={Unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="">-- choisir l'unité de resource--</option>
          <option value="HR">Unité par heure</option>
          <option value="MT">Unité par mettre</option>
          <option value="JJ">Unité par jour</option>
          <option value="MM">Unité par mois</option>
        </select>
      </div>
        </div>
        </div>
        <Button variant="contained" disableElevation className={style.ajoute} onClick={modif}>
          <h3>modifier equipement</h3>
        </Button>
    </form>
  );
};

export default Update;
