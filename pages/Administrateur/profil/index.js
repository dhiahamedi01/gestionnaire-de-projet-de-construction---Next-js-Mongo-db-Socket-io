import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar"
import Myprofil from "@/components/user/index"
import styles from '@/styles/Home.module.css'
export default function profil() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br>
    </div>
    <div className={styles.container2}>
       <Myprofil></Myprofil>
    </div>
    </div>
  )
}
