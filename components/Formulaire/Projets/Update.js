import styles from '../../../styles/NewProjectCard.module.css'
import domain from "@/utils/config"
import axios from "axios"
import { useEffect, useState } from "react"
import info from './InfoGouv'



const Update = ({information}) => {
  console.log(information);
    const [Gov, setGov] = useState(info());
    const [file, setFile] = useState(null);
    const [Imageurl, setImageurl] = useState(information.Imageurl);
    const [nom,setnom] = useState(information.nom)
    const [rue,setrue] = useState(information.rue)
    const [desc,setdesc] = useState(information.desc)
    const [type,settype] = useState(information.type)
    const [Date,setDate] = useState(information.Date)
    const [Client,setClient] = useState(information.Client)
    const [Devise,setDevise] = useState(information.Devise)
    const [nomimg,setnomimg]=useState('choisir une image')
    const [local,setlocal] = useState(information.local)
    const [selectedMuni, setSelectedMuni] = useState(information.selectedMuni);
    const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'dhiahm');


  {/***** Envoi Tous les donnés du Projet en Backend ******/}

      const sendUrl = async () => {
            const projet={nom,desc,type,Date,local,selectedMuni,rue,Client,Devise,Imageurl}
            try {
              await axios.put(`${domain}/Addproject/${information._id}`,projet);
              handleClick()
              setOpen(true);
              alert('Le projet est ajouté ')
              //Vider les Donné de formulaire
              setImageurl('');setnom('');setdesc('');settype('');setDate(null);setlocal('');setSelectedMuni("");setClient('');
              setDevise('');setFile(null);
            }catch (error) {
              setImageurl('');setnom('');setdesc('');settype('');setDate(null);setlocal('');setClient('');
              setDevise('');setFile(null);setSelectedMuni("");
              alert('il y a une probleme  ')
              console.log(error);
            }
      };
      {/**************FIN Envoi****************/}




 {/**************Envoi d'image en cloudinary************/}
      useEffect(() => {
        if (file != null) {
            const uploadImg = async () => {
            try {
              const photo = await axios.post('https://api.cloudinary.com/v1_1/dcv3k57dk/upload', formData);
              setnomimg(file.name);
              const Url = photo.data.secure_url;
              setImageurl(Url);
              setFile(null);
              console.log('image est envoi')
            }catch (error) {
              alert('il y a une probleme de connexion')
              console.log(error);
            }};
            uploadImg();
      }
      },[file]);

      {/************FIN  ENVOI**************/}
      

     {/************Pour trouver Gouvernorat **************/}
      const munis = Gov.find(
        (ch) => ch.Gouvernorat === local
      )?.Munici;
      {/************FIN  trouver**************/}
    


      return (
        
        <form className={styles.form}>
                  <label For="title">Nom</label>
                  <input type="text" id="title" name="title"  placeholder='le nom du projet'
                  value={nom} onChange={ (e)=>{setnom(e.target.value)} } />

                  <label For="description">Description</label>
                  <textarea id="description" name="description" placeholder='le Description du projet'
                  value={desc} onChange={ (e)=>{setdesc(e.target.value)} }></textarea>

                  <label For="unit">Type</label>
                  <div className={styles["select-wrapper"]}>
                  <select id="unit" name="unit" value={type} onChange={ (e)=>{settype(e.target.value)} }>
                      <option value="Construction De Bâtiments">Construction De Bâtiments</option>
                      <option value="Rénovation De Maison">Rénovation De Maison</option>
                      <option value="Conception Architecturale">Conception Architecturale</option>
                      <option value="Fourniture De Matériel">Fourniture De Matériel</option>
                      <option value="Maintenance Du Batiment">Maintenance Du Batiment</option>
                      <option value="Rénovation De Bâtiment">Rénovation De Bâtiment</option>
                      <option value="Design D'intérieur">Design D'intérieur</option>
                      <option value="Conseiller En Construction">Conseiller En Construction</option>
                  </select>
                  </div>

                  <div className={styles.container}>

                      <div className={styles.groupe}>
                          <label For="date"><i className="far fa-calendar-check"></i>&ensp;Date</label>
                          <input type="Date" id="" name="qnte"
                          value={Date} onChange={ (e)=>{setDate(e.target.value)} }
                          className={styles["date-input"]} />
                      </div>

                      <div className={styles.groupe}>
                          <label For="Localisation">
                          <i className="fas fa-map-marker-alt"></i>&ensp;Gouvernorat
                          </label>
                          <div className={styles["localisation"]}>
                            <select id="" name="" value={local} onChange={ (e)=>{setlocal(e.target.value)} }>
                               <option value="">--Choisir un Gouvernorat--</option>
                               {Gov.map((ch) => (
                                <option key={ch.id} value={ch.Gouvernorat}>{ch.Gouvernorat}</option> ))}
                            </select>
                          </div>
                      </div>
                      <div className={styles.groupe}>
                          <label For="Localisation">
                          <i className="fas fa-map-marker-alt"></i>&ensp;Municipality
                          </label>
                          <div className={styles["Municip"]}>
                            <select id="" name="" value={selectedMuni} onChange={ (e)=>{setSelectedMuni(e.target.value)} }>
                            <option value="">--Choisir un Municipality--</option>
                            {munis &&
                              munis.map((muni) => (
                                <option key={muni.name} value={muni.name}>
                                  {muni.name}
                                </option>
                              ))}
                            </select>
                          </div>
                      </div>
                  </div>
                <label For="rue"className={styles.Rue}>
                   <i className="fas fa-road"></i>&ensp;Rue 
                </label>
                  <input type="text" id="rue" name="rue" placeholder='le Rue du votre projet  (facultatif)'
                  value={rue} onChange={ (e)=>{setrue(e.target.value)} }/>

                  
                <div className={styles.container}>

                    <div className={styles.groupe}>
                          <label For="Client"><i className="far fa-image"></i>&ensp;Image</label>
                        <div className={styles.file}>
                          <label For="file"><i className="fas fa-plus-circle"></i>&ensp;{nomimg}</label>
                          <input type="file"  onChange={(e) => setFile(e.target.files[0])}  
                          name="image" className={styles["file-input"]}  accept='image/*'/>
                        </div>
                    </div>

                    <div className={styles.groupe}>
                         <label  For="Devise" className={styles.Devise}>
                            <i className="fas fa-money-bill-wave"></i>&ensp;Devise
                         </label>
                      <div className={styles["select-groupe"]}>
                         <select id="" name="" value={Devise} onChange={ (e)=>{setDevise(e.target.value)} }>
                            <option value="USD">💵 USD</option>
                            <option value="EURO">💶 EURO</option>
                            <option value="POUND">💷 POUND</option>
                            <option value="YEN">💴 YEN</option>
                            <option value="TND">💸 TND</option>
                            <option value="GBP">GBP</option>
                            
                        </select>
                      </div>
                    </div>
                    <div className={styles.groupe}>
                         <label  For="Clien">
                            <i className="fas fa-user"></i>&ensp;Client
                         </label>
                      <div className={styles["select-client"]}>
                         <select id="" name=""value={Client} onChange={ (e)=>{setClient(e.target.value)} }>
                            <option value="Salah Mejri">Salah Mejri</option>
                            <option value="Dhia Hamdi">Dhia Hamdi</option>
                            <option value="Adem Jbali<">Adem Jbali</option>
                            <option value="Ezzdine Rjaibi">Ezzdine Rjaibi</option>
                        </select>
                      </div>
                    </div>
                </div>

                <button type="submit" onClick={sendUrl}>Ajouter</button>
              </form>
              
      )
}

export default Update