import * as React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from "../../styles/Blog.module.css";
import style from "@/styles/Resource.module.css";
import Modal from "react-modal";
import domain from "@/utils/config";
import axios from "axios";
import Form1 from "@/components/Formulaire/Resources/matriel/Form";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function CustomizedTables({donne}) {
const [info,setinfo] = useState([]);
const [employer, setemployer] = useState(false);
const [supp,setsupp] = useState(false);
const [selected,setselected] = useState(null);

const handleOpenModalemp = (info) => {
  setemployer(true);
  setinfo(info)
};

const handleCloseModalemp = () => {
  setemployer(false);
};
 const handleOpenModalsupp = (id) => {
    setselected(id);
    setsupp(true);
  };

  const handleCloseModalsupp = () => {
    setsupp(false);
  };

  async function deletePost(id) {
    try {
      await axios.delete(`${domain}/Addmatriel/${id}`);
      setsupp(false);
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
            <StyledTableCell>Mon Stock</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">unitées</StyledTableCell>
            <StyledTableCell align="center">Quantité</StyledTableCell>
            <StyledTableCell align="center" >Prix</StyledTableCell>
            <StyledTableCell align="center" ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donne.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{row.nom}</StyledTableCell>
              <StyledTableCell align="center">{row.desc}</StyledTableCell>
              <StyledTableCell align="center">par kilogram</StyledTableCell>
              <StyledTableCell align="center">{row.mat}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">
                  
                  <Button variant="contained" className={styles.edit2} onClick={()=>{handleOpenModalemp(row)}}>
                    <i className="fas fa-edit"></i>
                  </Button>&ensp;&ensp;

                  <Button variant="contained" className={styles.supp2}  onClick={()=>{handleOpenModalsupp(row.id)}}>
                    <i className="fas fa-trash-alt"></i>
                  </Button>

              </StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Modal
     isOpen={employer}
     onRequestClose={handleCloseModalemp}
     className={style.modalI}
     overlayClassName={style.overlay}
   >
     <Form1 test="Modifier" information={info}></Form1>
   </Modal>
   <Modal
      isOpen={supp}
      onRequestClose={handleCloseModalsupp}
      className={styles.modal}
      overlayClassName={styles.overlay}
      >
       <div className={styles.header}>
          <h2 className={styles.titreform}>Vous voulez supprimez ce stock</h2>
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