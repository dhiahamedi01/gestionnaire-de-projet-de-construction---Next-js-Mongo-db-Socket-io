import { useEffect, useState } from "react";
import domain from "@/utils/config"
import axios from "axios"
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Navbar from "@/components/Bar/Navbar";
import Tab1 from "@/components/Table/Tab1";
import Sidebar from "@/components/Bar/Sidebar";
import Form1 from "@/components/Formulaire/Resources/employe/Form";
import styles from "@/styles/Home.module.css";
import style from "@/styles/Resource.module.css";

Modal.setAppElement("#__next");

export default function Resource() {
  const [employer, setemployer] = useState(false);
  const [information, setinformation] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(`${domain}/Addmatriel`);
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
          <h4><i className="fas fa-plus"></i>&ensp; Stock</h4>
      </Button>

      
      <div className={styles.container2}>
        <Tab1 donne={information}></Tab1>
      </div>
      <Modal
        isOpen={employer}
        onRequestClose={handleCloseModalemp}
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <Form1></Form1>
      </Modal>
    </div>
  );
}
