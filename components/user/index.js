import React, { useState } from 'react';
import style from '../../styles/profil.module.css';
import styles from '@/styles/NewProjectCard.module.css'
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import Update from '../Formulaire/user/update_profil';
export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.globale}>
      <div className={style.header}>
        <div className={style.photo}>
          <div className={style.profil}>
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className={style.image} />
            ) : (
              <img src="/img/user.jpg" alt="Default" className={style.image} />
            )}
            <input type="file" name="image" id="file-input" className={style["file-input"]} accept="image/*" onChange={handleFileChange} />
            <label htmlFor="file-input" className={style.label}>Choisir photo</label>
          </div>
        </div>
        <Button variant="contained" disableElevation className={style.btn3} onClick={handleOpenModal} >
          <h3>Modifier mon profil</h3>
        </Button>
      </div>
      <div className={style.form}>
        <div className={style.groupe}>
          <div className={style.minigroupe}>
            <div className={style.titre}>
              <h1 className={style.title}>Utilisateur:</h1>

              <hr className={style.hr}></hr>
              <div className={style.utilisateur}>
              <div className={style.block}>
                <h4 className={style.h4}>
                <i className="fas fa-user" style={{color:'#e09900'}}></i>&ensp;nom:
                </h4 >
                <span className={style.span}>test</span>
              </div>
              <div className={style.block}>
              <h4 className={style.h4}>
              <i className="fas fa-user" style={{color:'#e09900'}}></i>&ensp;prenom:
              </h4>
              <span className={style.span}>test</span> 
              </div>
              <div className={style.block}>
              <h4><i class="fas fa-phone"  style={{color:'#e09900'}}></i></h4>&ensp;
              <h4 className={style.h4}>
              téléphone:
              </h4> 
              <span className={style.span}>+21699005282</span> 
              </div>
              </div>
            </div>
          </div>
          <div className={style.minigroupe}>
            <div className={style.titre}>
              <h1 className={style.title}>Societé:</h1>
              <hr className={style.hr}></hr>
            </div>
          </div>
        </div>
        <div className={style.groupe}>
          <div className={style.minigroupe}>
            <div className={style.titre}>
              <h1 className={style.title}>Mot de passe:</h1>
              <hr className={style.hr}></hr>
            </div>
          </div>
          <div className={style.minigroupe}>
            <div className={style.titre}>
              <h1 className={style.title}>Confirmer mot de passe:</h1>
              <hr className={style.hr}></hr>
            </div>
          </div>
        </div>
      </div>
      <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
              <div className={styles.header}>
              <h2 className={styles.titreform}>
              <i className="fas fa-plus"></i>&ensp;
              modifier mon profil</h2>
              <button type="button" className={styles.close} onClick={handleCloseModal}><span className="close-icon">
                <i className="fas fa-times"></i></span>
              </button><br></br>
              </div>
              <Update></Update>
          
            </Modal>
    </div>
    
  );
}
