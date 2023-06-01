import styles from '../../styles/suiv.module.css'
import Modal from 'react-modal';
import {useState } from "react"
export default function Activ() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [moyenne, setmoyenne] = useState(true);

  const handleOpenModal = () => {
      setModalIsOpen(true);
  };

  const handleCloseModal = () => {
      setModalIsOpen(false);
  };
  
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.block}>
                <div className={styles.blocki}>
                <button className={styles.detaille} onClick={handleOpenModal}>
                <i className="far fa-eye"></i>
                </button>
                </div>
                <div className={styles.name}>
                <span className={styles.title}>Project name</span>
                <span className={styles.activite}>
                    activité name
                </span>
                </div>
            </div>
            <div className={styles.block2}>
                <span className={styles.localisation}>
                  <i className="fas fa-map-marker-alt"></i>&ensp;Tunis , Marsa
                </span>
                <span className={styles.date}>
                  <i className="far fa-calendar-check"></i>&ensp;17/10/2000
                </span>
            </div>
            {moyenne?(
            <div className={styles.block3}>
                <div className={styles.note}>
                   <p className={styles.p}><i className="fas fa-check"></i>&ensp;Trés Bien</p>
                </div>
            </div>)
            :( <div className={styles.block3}>
                <div className={styles.note1}>
                   <p className={styles.p}><i className="fas fa-times"></i>&ensp;Mauvais</p>
                </div>
            </div>) 
            }
        </div>
  
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
          >
          </Modal>
    </div>
  )
}
