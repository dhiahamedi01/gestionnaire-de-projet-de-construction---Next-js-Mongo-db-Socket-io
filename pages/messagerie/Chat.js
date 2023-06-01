import * as React from 'react';
import TextField from '@mui/material/TextField';
import Navbar from "@/components/Bar/Navbar";
import Sidebar from "@/components/Bar/Sidebar";
import Msg from "../../components/messagerie/Msg";
import User from "../../components/messagerie/User";
import User1 from "../../components/messagerie/User1";
import styles from "../../styles/Home.module.css";
import style from "../../styles/Msg.module.css";

export default function Chat() {
  return (
    <>
      <div className={styles.page}>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
      </div>
      <div className={style.chat}>
        <div className={style.left}>
          <div className={style.navi}>
            <h1 className={style.title}>Discussions</h1>
          </div>
          <TextField
          id="outlined-multiline-flexible"
          label="Search"
          multiline
          className={style.search}
          maxRows={4}
          />
          <div className={style.users}>
            <User></User>
          </div>
        </div>

        <Msg></Msg>
      </div>
    </>
  );
}
