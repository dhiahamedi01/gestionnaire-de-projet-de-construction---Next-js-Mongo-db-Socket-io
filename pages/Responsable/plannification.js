import Navbar from "@/components/Bar/Navbar"
import Sidebar1 from "@/components/Bar/Sidebar1"
import styles from '@/styles/Home.module.css'
import Calendrier from "@/components/calendrier/index"

export default function Suiv() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar1></Sidebar1>
        <Navbar></Navbar><br></br>
    </div>
    <div className={styles.container}>
       <Calendrier></Calendrier>
    </div>
    </div>
  )
}
