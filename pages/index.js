import Bande from "@/Components/Bande"
import Slide from "@/Components/Image_slider/Slide"
import Nav from "@/Components/header/Nav"
import Navi from "@/Components/header/Navi"
import Serviceinfo from "@/Components/service/Serviceinfo"
import style from "../styles/service.module.css";
import Info from "@/Components/comment/Info"
export default function Home() {
  return (
    <>
    <Navi></Navi>
    <Nav></Nav>
    <div>
      <Slide></Slide>
      <div className={style.container}>
        <h3 className={style.text}>Comment ca marche</h3>
        <div  className={style.card}></div>
      </div>
      <Info></Info>
      <Bande></Bande>
      <div className={style.container}>
        <h3 className={style.text}>NOUS FOURNISSONS <span className={style.span}>LES MEILLEURS</span><br></br> SERVICES DE CONSTRUCTION</h3>
        <div  className={style.card}>
          <Serviceinfo></Serviceinfo>
        </div>
      </div>
    </div>
    </>
  )}