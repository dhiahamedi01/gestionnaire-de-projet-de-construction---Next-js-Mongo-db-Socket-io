import Image from 'next/image';
import style from '../../styles/Navbar.module.css'
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

export default function Navbar() {
  const [name, setName] = useState("");
  const [prenom, setprenom] = useState("");
  useEffect(() => {
    // Récupérer le token JWT depuis le localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Décoder le token pour obtenir les informations utilisateur
      const decodedToken = jwt.decode(token);

      if (decodedToken) {
        const { nom, prenom, userId } = decodedToken;

        // Utiliser les informations utilisateur
        setName(nom);
        setprenom(prenom);
        console.log("Nom:", nom);
        console.log("Prénom:", prenom);
        console.log("ID:", userId);
      } else {
        console.log("Erreur lors du décodage du token");
      }
    } else {
      console.log("Aucun token trouvé");
    }
  }, []); // Le tableau de dépendances vide [] assure que cet effet s'exécute une seule fois

  return (
    <>
      <div className={style.nav}>
        <span className={style.dashboard}>
          <i className="fas fa-tachometer-alt"></i>&ensp;Dashboard
        </span>
        <div className={style.profiledetails}>
          <Image src="/img/profile.jpg" alt="" width={200} height={40} className={style.image}/>
          <span className={style.admin}>{name} {prenom}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </>
  );
}
