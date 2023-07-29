import style from "../styles/Bande.module.css";
export default function Bande() {
    return (
      <>
      <div className={style.bande}>
      <div className={style.b1}>
         <h2 className={style.h2}><i className="fas fa-user-tie"></i> Travailleur spécialisé</h2>
         <p className={style.p}>Lorem ipsum dolor sit amet elit.<br></br> Phasus nec pretim ornare velit non</p>
      </div>
      <div className={style.b2}>
         <h2 className={style.h2}><i className="fas fa-briefcase"></i> Un travail de qualité</h2>
         <p className={style.p}>Lorem ipsum dolor sit amet elit.<br></br> Phasus nec pretim ornare velit non</p>
      </div>
      <div className={style.b3}>
         <h2 className={style.h2}><i className="fa fa-phone-alt"></i> Assistance 24/7 </h2>
         <p className={style.p}>Lorem ipsum dolor sit amet elit.<br></br> Phasus nec pretim ornare velit non</p>
      </div>
    </div>
      </>
    )
  }
  