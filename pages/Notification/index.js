import Navbar from "@/components/Bar/Navbar";
import Sidebar from "@/components/Bar/Sidebar";
import styles from "../../styles/Home.module.css";

export default function Chat() {
  return (
    <>
      <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
      </div>
      <div className={styles.container}>
      </div>
    </>
  );
}
