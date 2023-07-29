import { useEffect, useState } from "react";
import domain from "@/utils/config"
import axios from "axios"
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Navbar from "@/components/Bar/Navbar";
import Tab from "@/components/Table/Equipement";
import Sidebar from "@/components/Bar/Sidebar";
import Form from "@/components/Formulaire/Resources/equipement/Form";
import styles from "@/styles/Home.module.css";
import style from "@/styles/Resource.module.css";
import styless from "@/styles/Responsable.module.css";

Modal.setAppElement("#__next");

export default function Resource() {
  const [Equipement, setEquipement] = useState(false);
  const [information, setinformation] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(`${domain}/resource/equipement`);
            setinformation(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    fetchData();
  }, []);


  const handleOpenModalemp = () => {
    setEquipement(true);
  };

  const handleCloseModalemp = () => {
    setEquipement(false);
  };
  return (
    <div className={styles.besbes}>
      <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <br></br>
      </div>
      <br></br>
      <Button className={style.employe}
      variant="contained"onClick={handleOpenModalemp}>
          <h4><i className="fas fa-plus"></i>&ensp; Equipement</h4>
      </Button>

      
      <div className={styles.container2}>
        <Tab donne={information}></Tab>
      </div>
      <Modal
        isOpen={Equipement}
        onRequestClose={handleCloseModalemp}
        className={style.modalI}
        overlayClassName={styless.overlay}
      >
        <Form test={"Ajouter"}></Form>
      </Modal>
    </div>
  );
}
