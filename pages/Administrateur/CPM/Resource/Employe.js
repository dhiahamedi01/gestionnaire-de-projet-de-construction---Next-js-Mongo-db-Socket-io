import { useEffect, useState } from "react";
import domain from "@/utils/config"
import axios from "axios"
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Navbar from "@/components/Bar/Navbar";
import Tab from "@/components/Table/Employe";
import Sidebar from "@/components/Bar/Sidebar";
import Form from "@/components/Formulaire/Resources/employe/Form";
import styles from "@/styles/Home.module.css";
import style from "@/styles/Resource.module.css";
import styless from "@/styles/Responsable.module.css";

Modal.setAppElement("#__next");

export default function Resource() {
  const [employer, setemployer] = useState(false);
  const [information, setinformation] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(`${domain}/resource/Employe`);
            setinformation(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    fetchData();
  }, []);


  const handleOpenModalemp = () => {
    setemployer(true);
  };

  const handleCloseModalemp = () => {
    setemployer(false);
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
          <h4><i className="fas fa-plus"></i>&ensp; employe</h4>
      </Button>

      
      <div className={styles.container2}>
        <Tab donne={information}></Tab>
      </div>
      <Modal
        isOpen={employer}
        onRequestClose={handleCloseModalemp}
        className={styless.modal2}
        overlayClassName={styless.overlay}
      >
        <Form test={"Ajouter"}></Form>
      </Modal>
    </div>
  );
}
