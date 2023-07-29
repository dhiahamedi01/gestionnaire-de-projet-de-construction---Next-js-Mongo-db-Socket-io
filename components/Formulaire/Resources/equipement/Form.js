import style from "../../../../styles/Resource.module.css";
import domain from "@/utils/config";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const Form = ({ test, information }) => {
  const [nom, setNom] = useState('');
  const [desc, setDesc] = useState('');
  const [Unit, setUnit] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    setNom(information?.nom || '');
    setDesc(information?.desc || '');
    setUnit(information?.Unit || '');
    setPrice(information?.price || '');
  }, [information]);

  const send = async () => {
    const Resource = { Unit: Unit.label, nom, desc, price };
    try {
      await axios.post(`${domain}/resource/equipement`, Resource);
      alert('Le resource est ajouté ');
      setUnit('');
      setNom('');
      setDesc('');
      setPrice('');
    } catch (error) {
      setUnit('');
      setNom('');
      setDesc('');
      setPrice('');
      alert('Il y a un problème');
      console.log(error);
    }
  };


 const modif = async () => {
  const Resource={Unit: Unit.label,nom,desc,price}
  try {
    await axios.put(`${domain}/resource/equipement/${information._id}`,Resource);
    alert('Le resource est modifier ');
  }catch (error) {

    alert('il y a une probleme  ')
    console.log(error);
  }
};

  const INFO = [
    { label: 'Heure', id: 1 },
    { label: 'Mètre carré', id: 2 },
    { label: 'Mètre linéaire', id: 3 },
    { label: 'Kilowatt-heure', id: 4 },
  ];

  return (
    <form className={style.form2}>
      <h1 className={style.title2}>{test} les equipements</h1>
      <div className={style.sousform}>
        <TextField
          className={style.nom}
          id="outlined-multiline-flexible"
          label="Nom d'equipement"
          multiline
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-static"
          label="Categorie"
          multiline
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>
          <Autocomplete
            className={style.unit2}
            disablePortal
            id="combo-box-demo"
            options={INFO}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Unité" />}
            value={Unit}
            onChange={(e, newValue) => setUnit(newValue)}
          />
        </div>
      </div>
      <Button variant="contained" disableElevation className={style.ajoute} onClick={test=="Modifier"? modif:send}>
        <h3>Ajouter le Resource</h3>
      </Button>
    </form>
  );
};

export default Form;
