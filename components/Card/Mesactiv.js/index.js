import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar"
import Ajoute from "@/components/Card/projets/Ajoute"
import Blogcard2 from "@/components/Blog/Blogcard2"
import styles from '@/styles/Home.module.css'
export default function GereProjet() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br><br></br>
    </div>
    <div className={styles.container}>
      <Ajoute test={"Activite"}></Ajoute>
         <Blogcard2 ></Blogcard2>
    </div>
    </div>
  )
}
