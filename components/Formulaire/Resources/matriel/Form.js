import style from "../../../../styles/Resource.module.css";
import domain from "@/utils/config";
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useState ,useEffect} from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';

const Form = ({ test, information }) => {
  const [mat, setMat] = useState('');
  const [nom, setNom] = useState('');
  const [desc, setDesc] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState(null);

  useEffect(() => {
    setMat(information?.mat || '');
    setNom(information?.nom || '');
    setDesc(information?.desc || '');
    setUnit(information?.unit || '');
    setPrice(information?.price || '');
  }, [information]);

  const send = async () => {
    const Matriel = { mat, nom, desc, unit: unit.label, price };
    try {
      await axios.post(`${domain}/Addmatriel`, Matriel);
      alert('Le matriel est ajouté ');
      setMat(''); setNom(''); setDesc(''); setPrice(0); setUnit('');
    } catch (error) {
      setMat(''); setNom(''); setDesc(''); setPrice(0); setUnit('');
      alert('Il y a un problème');
      console.log(error);
    }
  };

  const modif = async () => {
    const Matriel = { mat, nom, desc, unit: unit.label, price };
    try {
      await axios.put(`${domain}/resource/Employe/${information._id}`, Matriel);
      alert('L\'employé est modifié');
    } catch (error) {
      alert('Il y a un problème');
      console.log(error);
    }
  };

  const INFO = [
    { label: 'Litres', id: 1 },
    { label: 'kilogramme', id: 2 },
    { label: 'Pièces', id: 3 },
    { label: 'Tonnes', id: 4 },
  ];

  return (
    <form className={style.form2}>
      <h1 className={style.title2}>{test} les Matrieaux</h1>
      <div className={style.sousform}>
        <TextField
          className={style.nom}
          id="outlined-multiline-flexible"
          label="Nom de matriel"
          multiline
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className={style.desc}
        />

        <div className={style.two}>
          <FormControl fullWidth sx={{ m: 1 }} className={style.price}>
            <InputLabel htmlFor="outlined-adornment-amount">
              <h3>Prix</h3>
            </InputLabel>
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
            className={style.unit}
            disablePortal
            id="combo-box-demo"
            options={INFO}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Unité" />}
            value={unit}
            onChange={(e, newValue) => setUnit(newValue)}
          />

          <TextField
            id="outlined-basic"
            label="Quantite"
            variant="outlined"
            type="Number"
            className={style.Quant}
            value={mat}
            onChange={(e) => setMat(e.target.value)}
          />
        </div>
      </div>
      <Button variant="contained" disableElevation className={style.ajoute} onClick={send}>
        <h3>Ajouter le Resource</h3>
      </Button>
    </form>
  );
};

export default Form;
