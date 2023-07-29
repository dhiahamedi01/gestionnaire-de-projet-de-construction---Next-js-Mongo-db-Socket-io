import * as React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Update from "@/components/Formulaire/Resources/employe/Form";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from "react-modal";
import styles from "../../styles/Blog.module.css";
import style from "@/styles/Resource.module.css";
import domain from "@/utils/config";
import axios from "axios";
import Avatar from '@mui/material/Avatar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function Employe({donne}) {
  const [modif,setmodif] = useState(false);
  const [supp,setsupp] = useState(false);
  const [info,setinfo] = useState([]);
  const [selected,setselected] = useState(null);
  const router = useRouter()

  const handleOpenModalemp = (info) => {
    setmodif(true);
    setinfo(info)
  };

  const handleCloseModalemp = () => {
    setmodif(false);
  };

  const handleOpenModalsupp = (id) => {
    setselected(id);
    setsupp(true);
  };

  const handleCloseModalsupp = () => {
    setsupp(false);
  };

  async function deletePost(id){
    try {
      await axios.delete(`${domain}/resource/Employe/${id}`);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center" ></StyledTableCell>
            <StyledTableCell>Les employes</StyledTableCell>
            <StyledTableCell align="center">Telephones</StyledTableCell>
            <StyledTableCell align="center">Types</StyledTableCell>
            <StyledTableCell align="center">Prix&nbsp;(Jour)</StyledTableCell>
            <StyledTableCell align="center" >RIB &ensp;Bancaire</StyledTableCell>
            <StyledTableCell align="center" >Email</StyledTableCell>
            <StyledTableCell align="center" ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donne.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">  <Avatar src="/broken-image.jpg" /></StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.nom}&ensp;{row.prenom}</StyledTableCell>
              <StyledTableCell align="center">{row.tel}</StyledTableCell>
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.RIB}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">
                  <Button variant="contained" className={styles.edit2} onClick={()=>{handleOpenModalemp(row)}}>
                    <i className="fas fa-edit"></i>
                  </Button>&ensp;&ensp;

                  <Button variant="contained" className={styles.supp2} onClick={()=>{handleOpenModalsupp(row.id)}}>
                    <i className="fas fa-trash-alt"></i>
                  </Button>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <Modal
      isOpen={modif}
      onRequestClose={handleCloseModalemp}
      className={style.modal}
      overlayClassName={style.overlay}
      >
      <Update information={info} test={"Modifier"}></Update>
      </Modal>

      <Modal
      isOpen={supp}
      onRequestClose={handleCloseModalsupp}
      className={styles.modal}
      overlayClassName={styles.overlay}
      >
       <div className={styles.header}>
          <h2 className={styles.titreform}>Vous voulez supprimez cet employe</h2>
          <hr className={styles.hr}></hr>
          <div className={styles.taper}>
            <button
              className={styles.non}
              onClick={handleCloseModalsupp}
              type="submit"
            >
              <i className="fas fa-times"></i>&ensp;Non
            </button>
            <button
              className={styles.oui}
              type="submit"
              onClick={() => deletePost(selected)}
            >
              <i className="fas fa-check"></i>&ensp;Oui
            </button>
          </div>
        </div>
      </Modal>
  </>
  );
}