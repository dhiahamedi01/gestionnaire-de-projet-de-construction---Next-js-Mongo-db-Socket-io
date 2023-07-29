import styles from '../../../styles/NewProjectCard.module.css'
import {useState } from "react"
import Modal from 'react-modal';
Modal.setAppElement('#__next');


const Ajoute = () => {
  
      const [modalIsOpen, setModalIsOpen] = useState(false);

      const handleOpenModal = () => {
          setModalIsOpen(true);
      };

      const handleCloseModal = () => {
          setModalIsOpen(false);
      };
      const [tajerba, settajerba] = useState('bobo');
    
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <i className="fas fa-plus"></i>
      </div>
      <div className={styles.title}>Nouveau Activite</div>
      <div className={styles.description}>
        Cliquez sur le bouton ci-dessous pour ajouter un nouveau Activite.
      </div>
      <button className={styles.button} onClick={handleOpenModal}>
       <i className="fas fa-folder"></i>&ensp;
        Ajouter un Activite
      </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
              <div className={styles.header}>
              <h2 className={styles.titreform}>
              <i className="fas fa-plus"></i>&ensp;
              Ajouter un projet</h2>
              <button type="button" className={styles.close} onClick={handleCloseModal}><span className="close-icon">
                <i className="fas fa-times"></i></span>
              </button>
              </div>
            </Modal>
    </div>
    
  )
}

export default Ajoute
