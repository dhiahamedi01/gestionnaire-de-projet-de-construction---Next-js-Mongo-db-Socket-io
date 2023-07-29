import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar"
import Chart from "@/components/Chart/index"
import Table from "@/components/Table/Tablen"
import styles from '@/styles/Home.module.css'
export default function GereProjet() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br><br></br>
    </div>
    <div className={styles.kimajet}>
    <div className={styles.back}>
        <span className={styles.logo}>
           <i className="fas fa-user"></i></span>&ensp;&ensp;<span>test</span>
    </div>
    <div className={styles.back}>
        <span className={styles.logo}>
        <i class="fas fa-hard-hat"></i></span>&ensp;&ensp;<span>test</span>
    </div>
    <div className={styles.back}>
        <span className={styles.logo}>
           <i className="fas fa-user"></i></span>&ensp;&ensp;<span>test</span>
    </div>
    <div className={styles.back}>
        <span className={styles.logo}>
           <i className="fas fa-user"></i></span>&ensp;&ensp;<span>test</span>
    </div>

    </div>
    <div className={styles.container}>
       
         <Chart></Chart>
    <div style={{width:"50%",marginBottom:"0%"}}>
    <Table></Table>
    </div>
    </div>
    </div>
  )
}
