import styles from '../../styles/login.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Link from 'next/link'
import domain from "@/utils/config";
import axios from "axios";
import Alert from '@mui/material/Alert';


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState("connexion");


  const handleLogin = async () => {
    setloading("loading...")
    try {
      const response = await axios.post(`${domain}/Login/auth`, {email,password});
      const token = response.data.token;
      localStorage.setItem('token', token);
      router.push('/Administrateur/CPM/Projet');
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('Identifiants invalides');
        setloading("Repeter")
        setAlert(true);
      } else {
        console.log('Une erreur s\'est produite', error);
      }
    }
  };

  return (
    <div>
      <img className={styles.wave} src="/img/wave.png" />
      <div className={styles.container}>
        <div className={styles.img}>
          <img className={styles.bg} src="/img/bg.svg" />
        </div>
        <div className={styles.loginContent}>
          <div className={styles.form}>
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
            <div className={styles.header}>
            <img src="/img/avatar.svg" />
            <h2 className={styles.title}>BIENVENUE</h2>
            </div>
            <div className={styles.cnx}>
             {alert && <Alert className={styles.alert} severity="error">Veuillez vérifier les données saisies !</Alert>}            
             <div className={styles.input}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                sx={{ width: '370px' }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                id="outlined-multiline-flexible"
                label="Password"
                type="password"
                sx={{ width: '370px' }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <a className={styles.forgot} href="#">
              Mot de passe oublié?
            </a>
            <Button className={styles.btn} variant="contained" value="submit" onClick={handleLogin}>
            {loading}
            </Button>
            <span className={styles.or}>or</span>
            <div className={styles.img1}>
              <img className={styles.logo} src="/img/google.PNG" />
              <img className={styles.logo} src="/img/facebook.webp" />
              <Link className={styles.inscri} href={{ pathname: '/Login/inscription'}} >
                Je n'ai pas de compte ?
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
