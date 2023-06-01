import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar"
import styles from '@/styles/Home.module.css'
import Filter from '@/components/matriel/lawej';
import Activ from "@/components/activ/Activ"
export default function Suivre() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br>
    </div>
    <Filter></Filter>
    <div className={styles.container}>
       <Activ></Activ>
       <Activ></Activ>
       <Activ></Activ>
       <Activ></Activ>
       <Activ></Activ>
    </div>
    </div>
  )
}
