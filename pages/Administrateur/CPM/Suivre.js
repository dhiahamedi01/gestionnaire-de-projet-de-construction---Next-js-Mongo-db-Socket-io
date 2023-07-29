import Navbar from "@/components/Bar/Navbar"
import Sidebar from "@/components/Bar/Sidebar"
import styles from '@/styles/Home.module.css'
import Activ from "@/components/activ/Activ"
import Activ2 from "@/components/activ/Activ2"
import Link from "next/link";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
export default function Suivre() {
  return (
    <div>
    <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar><br></br><br></br><br></br>
    </div>
 
    <div className={styles.container}>
    <div role="presentation" className={styles.title}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.soutitre}>
        <span underline="hover" color="inherit" href="/" >
          Projets
        </span>
        <span
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Activites
        </span>
        <Typography color="text.primary">Pointages</Typography>
      </Breadcrumbs>
    </div>
       <Activ></Activ>
       <Activ2></Activ2>

    </div>
    </div>
  )
}
