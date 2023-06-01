import * as React from 'react';
import Card from '@mui/material/Card';
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import domain from "@/utils/config"
import axios from "axios"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../../../styles/Blog.module.css"
import style from "../../../styles/Resource.module.css";
import Update from "@/components/Formulaire/Resources/equipement/Update";
import Modal from "react-modal";
Modal.setAppElement("#__next");

export default function Equipement() {
const [information,setinformation]=useState([]);
const [donne,setdonne]=useState([]);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [modalIsOpen1, setModalIsOpen1] = useState(false);
const [selectedId, setselectedId] = useState('');
const router = useRouter();

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(`${domain}/resource/equipement`);
            setinformation(response.data);
            console.log(information);
        } catch (error) {
            console.log(error);
        }
    }

    fetchData();
  }, []);

  async function deletePost(id) {
    try {
      await axios.delete(`${domain}/resource/equipement/${id}`);
      router.reload();

    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenModal = (info) => {
    setdonne(info)
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };


  const handleOpenModal1 = (id) => {
    setselectedId(id);
    setModalIsOpen1(true);
  };

  const handleCloseModal1 = () => {
    setModalIsOpen1(false);
  };


  return (
  <>
    {information.map((info) => (
    <Card sx={{ maxWidth: 345 }} className={styles.cardi} key={info._id}>
      <CardMedia
        sx={{ height: 140 }}
        image="/img/trax.png"
        title="green iguana"
      />
      <CardContent> 
        <Typography gutterBottom variant="h5" component="div" className={styles.title}>
          {info.nom}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.Desc}>
          {info.desc}
        </Typography>
      </CardContent>
      <CardActions className={styles.pied}>
      <Typography variant="body2" color="text.secondary">
          ${info.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
           {info.Unit}
      </Typography>
      <Typography gutterBottom variant="h5" component="div" >
         <button className={styles.edit2} onClick={()=>{handleOpenModal(info)}}><i className="fas fa-edit"></i></button>
         <button className={styles.supp2}onClick={()=>{handleOpenModal1(info._id)}} >  <i class="fas fa-trash-alt"></i></button>
        </Typography>
      </CardActions>
    </Card>
     ))}


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={style.modal}
        overlayClassName={style.overlay}>
          <Update information={donne}></Update>
      </Modal>


      



      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={handleCloseModal1}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.header}>
          <h2 className={styles.titreform}>Vous voulez supprimez cet équipement</h2>
          <hr className={styles.hr}></hr>
          <div className={styles.taper}>
            <button
              className={styles.non}
              onClick={handleCloseModal1}
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