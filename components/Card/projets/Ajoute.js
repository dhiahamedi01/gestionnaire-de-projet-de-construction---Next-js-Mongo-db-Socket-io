import styles from '../../../styles/NewProjectCard.module.css'
import styless from "@/styles/Responsable.module.css";
import {useState } from "react"
import Modal from 'react-modal';
import Form from '../../Formulaire/Projets/Form';
import Form2 from '../../Formulaire/Activite/Form';
Modal.setAppElement('#__next');


const Ajoute = ({test}) => {
  
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [modalIsOpen1, setModalIsOpen1] = useState(false);
      const [type, settype] = useState(test);

      const OpenModalprojet = () => {
          setModalIsOpen(true);
      };

      const CloseModalprojet = () => {
          setModalIsOpen(false);
      };

      const OpenModalActivite = () => {
        setModalIsOpen1(true);
    };

    const CloseModalActivite = () => {
        setModalIsOpen1(false);
    };
    
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <i className="fas fa-plus"></i>
      </div>
      <div className={styles.title}>Nouveau {type}</div>
      <div className={styles.description}>
        Cliquez sur le bouton ci-dessous pour ajouter un nouveau {type}.
      </div>
      <button className={styles.button} onClick={test=="Projet"? OpenModalprojet:OpenModalActivite}>
       <i className="fas fa-folder"></i>&ensp;
        Ajouter un {type}
      </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={CloseModalprojet}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
              <div className={styles.header}>
              <h2 className={styles.titreform}>
              <i className="fas fa-plus"></i>&ensp;
              Ajouter un projet</h2>
              <button type="button" className={styles.close} onClick={CloseModalprojet}><span className="close-icon">
                <i className="fas fa-times"></i></span>
              </button>
              </div>
              <Form></Form>
            </Modal>

            <Modal
                isOpen={modalIsOpen1}
                onRequestClose={CloseModalActivite}
                className={styless.modal2}
                overlayClassName={styles.overlay}
            >
              <Form2 test={"Ajoute un "}></Form2>
            </Modal>
    </div>
    
  )
}

export default Ajoute
