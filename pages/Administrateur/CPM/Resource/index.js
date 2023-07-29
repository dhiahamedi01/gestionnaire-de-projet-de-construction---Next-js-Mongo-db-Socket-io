import Card from "@/components/Card/Resources/index";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Bar/Navbar";
import Sidebar from "@/components/Bar/Sidebar";
import Link from "next/link";
export default function Resource() {
  return (  
    <>
    <div className={styles.page}>
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <br></br>
    </div>
      <div className={styles.container3}>

      <Link href={{ pathname: '../CPM/Resource/Employe'}} className={styles.link}>
        <Card ch="employe" ch1="/img/employe.svg"></Card>
      </Link>

      <Link href={{ pathname: '../CPM/Resource/Stock'}} className={styles.link}>
        <Card ch="Stock" ch1="/img/stock.svg"></Card>
      </Link>
      <Link href={{ pathname: '../CPM/Resource/Equipement'}} className={styles.link}>
        <Card ch="equipement" ch1="/img/equipement.svg"></Card>
      </Link>
      </div>
    </>
  );
}
