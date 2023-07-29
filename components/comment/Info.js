import style from "../../styles/info.module.css";
import Image from "next/image";
export default function Info() {
    return (
      <>
      <div className={style.information}>
          <div className={style.text}>
            <h1 className={style.titre}>Nous vous fournirons le meilleur travail dont 
            <span className={style.span}> vous rêviez !</span></h1><br></br>
            <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.</p>
          </div>
      </div>
      </>
    )
  }