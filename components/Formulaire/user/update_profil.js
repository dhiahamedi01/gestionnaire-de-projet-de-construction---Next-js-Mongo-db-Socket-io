// pages/index.js
import styles from "@/styles/update_profil.module.css";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
const update_profil = () => {
        const router = useRouter();
        const [nom, setNom] = useState('');
        const [prenom, setPrenom] = useState('');
        const [tel, settel] = useState('');
        const [societe, setSociete] = useState('');
        
      
        const handleModifier = (e) => {
          e.preventDefault();
          // Ajoutez ici la logique pour modifier les données avec les valeurs actuelles des champs
          console.log('Données modifiées :', {
            nom,
            prenom,
            tel,
            societe,
          });
        
          router.reload()
        };
        return (
            <form className={styles.formContainer} onSubmit={handleModifier}>
              <input
                className={styles.textField}
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <input
                className={styles.textField}
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
              <input
                className={styles.textField}
                type="tel"
                placeholder="Téléphone"
                value={tel}
                onChange={(e) => settel(e.target.value)}
              />
              <input
                className={styles.textField}
                type="text"
                placeholder="Société"
                value={societe}
                onChange={(e) => setSociete(e.target.value)}
              />
             
              <button className={styles.button} type="submit">
                Modifier
              </button>
            </form>
          );
        };
  
  export default update_profil;
  