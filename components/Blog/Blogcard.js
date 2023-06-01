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
              <i className="fas fa-edit"></i>
            </button>
            <button
              className={styles.supp}
              onClick={() => handleOpenModal(info.id)}
            >
              {" "}
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{info.nom}</h2>
            <p className={styles.description}>{info.type}</p>
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
            <i className="fas fa-plus"></i>&ensp; Ajouter un projet
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
        <Update information={donne}></Update>
      </Modal>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.header}>
          <h2 className={styles.titreform}>Vous voulez supprimez ce projet</h2>
          <hr className={styles.hr}></hr>
          <div className={styles.taper}>
            <button
              className={styles.non}
              onClick={handleCloseModal}
              type="submit"
            >
              <i className="fas fa-times"></i>&ensp;Non
            </button>
            <button
              className={styles.oui}
              type="submit"
              onClick={() => deletePost(selectedId)}
            >
              <i className="fas fa-check"></i>&ensp;Oui
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
