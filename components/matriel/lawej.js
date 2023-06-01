import styles from '../../styles/search.module.css'

export default function Filter() {
    return(
      <>
      <div className={styles.groupe}>
        <div className={styles.block}>
            <label htmlFor="title" className={styles.label}>
            <i className="fas fa-hard-hat"></i>&ensp;
            Nom</label><br></br>
            <input  className={styles.nom} type="text"placeholder='rechercher avec le nom'/>
        </div>
        <div className={styles.block}>
            <label htmlFor="title" className={styles.label}>
            <i className="fas fa-hard-hat"></i>&ensp;
            Type</label>
            <div className={styles["select-groupe"]}>
                <select id="" name="">
                  <option value="">--Type de projet--</option>
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
        </div>

        <div className={styles.block}>
            <label htmlFor="title"className={styles.label}>
                <i className="far fa-calendar-check"></i>&ensp;Date
            </label><br></br>
            <input className={styles.date} type="Date" id="date" name="date" />
        </div>
        <button className={styles.search} type='submit'>
          <i className="fas fa-search"></i>&ensp;
          Search
        </button>
      </div>
      </>
    );
}