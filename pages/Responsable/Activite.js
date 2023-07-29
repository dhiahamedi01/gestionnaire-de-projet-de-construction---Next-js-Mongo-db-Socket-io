import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar1"
import Blogcard2 from "@/components/Blog/Blogcard3"
import styles from '@/styles/Home.module.css'
export default function GereProjet() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br><br></br>
    </div>
    <div className={styles.container}>
         <Blogcard2 ></Blogcard2>
    </div>
    </div>
  )
}
