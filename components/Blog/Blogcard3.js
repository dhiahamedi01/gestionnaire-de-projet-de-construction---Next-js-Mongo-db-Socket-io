import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import domain from "@/utils/config";
import axios from "axios";
import styles from "../../styles/Blog.module.css";
import style from "../../styles/NewProjectCard.module.css";
import Blogmodel from "./Blogmodel";
import Blogmodel2 from "./Blogmodel2";
import Update from "../Formulaire/Projets/Update";
import Modal from "react-modal";
import jwt from 'jsonwebtoken';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

Modal.setAppElement("#__next");

export default function Blogcard() {
  const [Bloginfo, setBloginfo] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [selectedId, setselectedId] = useState(null);
  const [updateId, setupdateIdId] = useState(null);
  const [donne, setdonne] = useState([]);
  const [loading, setloading] = useState(true);
  const [loading2, setloading2] = useState(false);

  const router = useRouter();

  const handleOpenModal = (id) => {
    setselectedId(id);
    console.log(selectedId);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleOpenModal1 = (info) => {
    setdonne(info);
    setModalIsOpen1(true);
  };

  const handleCloseModal1 = () => {
    setModalIsOpen1(false);
  };

  useEffect(() => {
    setTimeout(() => {
      
    
    async function fetchData() {
      try {
        const response = await axios.get(`${domain}/Addproject`);
        setBloginfo(response.data);
        setloading(false);
        setloading2(true);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    }, 3000);
  }, []);

  async function deletePost(id) {
    try {
      await axios.delete(`${domain}/Addproject/${id}`);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  }

// Récupérer le token JWT depuis le localStorage
let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

if (token) {
  // Décoder le token pour obtenir les informations utilisateur
  const decodedToken = jwt.decode(token);

  if (decodedToken) {
    const { nom, prenom, userId } = decodedToken;

    // Utiliser les informations utilisateur
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("ID:", userId);
  } else {
    console.log("Erreur lors du décodage du token");
  }
} else {
  console.log("Aucun token trouvé");
}


  return (
    <>
      {loading &&
      <div className={styles.card2}>
          <div className={styles.part1}></div>
          <div className={styles.part2}></div>
          <div className={styles.part3}></div>
          <div className={styles.part4}>
              <div className={styles.part5}></div>
              <div className={styles.part5}></div>
          </div>
      </div>
      }
        {loading &&
      <div className={styles.card2}>
          <div className={styles.part1}></div>
          <div className={styles.part2}></div>
          <div className={styles.part3}></div>
          <div className={styles.part4}>
              <div className={styles.part5}></div>
              <div className={styles.part5}></div>
          </div>
      </div>
      }
      
      {loading2 && Bloginfo.map((info) => (
        <div className={styles.card} key={info.id}>
          <div className={styles.back}>
            <img src={info.Imageurl} alt={info.nom} className={styles.image} />
            <button
              className={styles.edit}
              onClick={() => handleOpenModal1(info)}
            >
              <i className="far fa-eye"></i>
            </button>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
            <Chip avatar={<Avatar alt="Natacha" src="/img/user.jpg" />} 
            label="Jawher salhi"variant="outlined"/>
            </h2>
            <p className={styles.description}>activite d'electricité</p>
            <div className={styles.groupe}>
              <p className={styles.localisation}>
                <i className="fas fa-map-marker-alt"></i>&ensp;{info.local},{" "}
                {info.selectedMuni}
              </p>
              <p className={styles.date}>
                <i className="far fa-calendar-check"></i>&ensp;
                {new Date(info.Date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={handleCloseModal1}
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <div className={style.header}>
          <h2 className={style.titreform}>
           Mon activité
          </h2>
          <button
            type="button"
            className={style.close}
            onClick={handleCloseModal1}
          >
            <span className="close-icon">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
        <div style={{display:"flex"}}>
       <div  style={{margin:"5%"}}>
        <h3>Prix totale de stock</h3>
        <span>125.000</span>
       </div>
       <div style={{margin:"5%"}}>
        <h3>Prix totale des travailleur</h3>
        <span>125.000</span>
       </div>
       <div style={{margin:"5%"}}>
        <h3>Unite d'activite</h3>
        <span>mettre carré</span>
       </div>
       </div><br></br>
       <div style={{display:"flex"}}>
       <div  style={{margin:"5%"}}>
        <h3>Date debut</h3>
        <span>22/06/2023</span>
       </div>
       <div style={{margin:"5%"}}>
       <h3>Date Fin</h3>
        <span>01/11/2023</span>
       </div>
       <div style={{margin:"5%"}}>
        <h3>Quantité d'unité de chaque jour</h3>
        <span>5300</span>
       </div>
       </div>
      </Modal>

    </>
  );
}
