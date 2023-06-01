import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar"
import Ajoute from "@/components/Card/projets/Ajoute"
import Blogcard from "@/components/Blog/Blogcard"
import Filter from '@/components/matriel/lawej';
import styles from '@/styles/Home.module.css'
export default function GereProjet() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br>
    </div>
    <Filter></Filter>
    <div className={styles.container}>
         <Ajoute></Ajoute>
          <Blogcard></Blogcard>
    </div>
    </div>
  )
}
