import styles from '../../styles/login.module.css';
import Image from 'next/image';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import domain from "@/utils/config";
import axios from "axios";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link'
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function Login() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, settel] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [Role, setRole] = useState("Administrateur");
  const [alert, setAlert] = useState(false);
  const [text, settest] = useState("Veuillez vérifier les données saisies !");
  const [loading, setloading] = useState("Inscription");
  const router = useRouter();


  const send = async () => {
    setloading("loading...")
    const user = { nom, prenom,email, password,Role,tel};
    if (password === password2 && validateEmail(email) && validatePhoneNumber(tel)) {
      try {
        await axios.post(`${domain}/Login/Inscription`, user);
        router.push('/Login/OTP');
      } catch (error){
        if (error.response && error.response.status === 400) {
          console.log('Email ou tel existe');
          setloading("Repeter")
          settest("Votre Email ou numero de Telephone existe !");
          setAlert(true);
        } else {
          console.log('Une erreur s\'est produite', error);
          setloading("Repeter")
          settest("Une erreur s'est produite !");
          setAlert(true);
        }
      }      
    } else {
      setloading("Repeter")
      settest("Veuillez vérifier les données saisies !")
      setAlert(true);
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (tel) => /^\d{8}$/.test(tel);

  return (
    <div>
      <img className={styles.wave} src="/img/wave.png" />
      <div className={styles.container}>
        <div className={styles.img}>
          <img className={styles.bg} src="/img/bg.svg" />
        </div>
        <div className={styles.loginContent}>
          <div className={styles.form1}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                  m: 1,
                },
              }}
              className={styles.Box}
            >
              <ButtonGroup variant="outlined" aria-label="outlined button group"></ButtonGroup>
            </Box>
            <img className={styles.logo3} src="/img/avatar.svg" />
            <h2 className={styles.title}>Inscription</h2>
            <div className={styles.inscription}>
              <div className={styles.alert}>
                {alert && <Alert severity="error">{text}</Alert>}
              </div>
              <div className={styles.groupe}>
                <TextField
                  id="outlined-multiline-flexible"
                  className={styles.input}
                  label="Nom"
                  multiline
                  maxRows={4}
                  value={nom}
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                />

                <TextField
                  id="outlined-multiline-flexible"
                  className={styles.input}
                  label="Prénom"
                  multiline
                  maxRows={4}
                  value={prenom}
                  onChange={(e) => {
                    setPrenom(e.target.value);
                  }}
                />
              </div>

              <div className={styles.groupe}>
                <FormControl className={styles.input}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    <span>Téléphone</span>
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">+216</InputAdornment>}
                    label="Téléphone"
                    type="number"
                    value={tel} onChange={(e) => settel(e.target.value)}
                  />
                </FormControl>

                <TextField
                  id="outlined-multiline-flexible"
                  className={styles.input}
                  label="Email"
                  multiline
                  maxRows={4}
                  value={email} onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>

              <div className={styles.groupe}>
                <TextField
                  id="password"
                  className={styles.input}
                  label="Mot de passe"
                  type="password"
                  maxRows={4}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <TextField
                  id="outlined-multiline-flexible"
                  className={styles.input}
                  label="Confirmation mot de passe"
                  type="password"
                  maxRows={4}
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
              </div>
            </div>
            <Button className={styles.btn1} value="button" onClick={send}>{loading}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
