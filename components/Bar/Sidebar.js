import Link from 'next/link';
import style from '../../styles/Sidebar.module.css';
import domain from "@/utils/config";
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';


const socket = io('http://localhost:3001', {
  transports: ['websocket'],
  withCredentials: true,
});


export default function Sidebar() {
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState(
    <i className="fas fa-chevron-up" aria-hidden={true}></i>
  );
  const [isOpen, setIsOpen] = useState(true);

  const Dropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
    if (isOpen) {
      setIcon(<i className="fas fa-chevron-down " aria-hidden="true"></i>);
    } else {
      setIcon(<i className="fas fa-chevron-up" aria-hidden="true"></i>);
    }
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };
  const InitNotif=()=>{
    setCount(0);
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  
    socket.on('Pointage', (pointage) => {
      setCount((prevCount) => prevCount + pointage);
    });
  
    return () => {
      socket.off('connect');
      socket.off('Pointage');
    };
  }, []);
  

  return (
    <div className={style.sidebar}>
      <div className={style.logodetails}>
        <span className={style.logoname}>
          <Image src="/img/titre.png" alt="" width={180} height={40} />
        </span>
      </div>
      <ul className={style.navlinks}>
        <li>
          <Link href={{ pathname: '/' }} className={style.active}>
            <i className="fas fa-tachometer-alt" aria-hidden="true"></i>
            <span className={style.span}>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: 'http://localhost:3000/Administrateur/profil' }}>
            <i className="fas fa-user"></i>
            <span className={style.span}>Profil</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/' }}>
            <i className="fas fa-users"></i>
            <span className={style.span}>Communauté</span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: 'http://localhost:3000/Notification' }} onClick={InitNotif}>
          <Badge badgeContent={count} color="error">
          &ensp; &ensp;<NotificationsIcon style={{color:'white'}}/>
          </Badge>&ensp;&ensp;
            <span className={style.span}>
              Notification
            </span>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/' }}  >
            <i className="fas fa-tasks"></i>
            <span className={style.span}>
              WEAVERS CPM<span onClick={Dropdown}>{icon}</span>
            </span>
          </Link>

          {/* Drop down */}
          {isOpen && (
            <ul className={style.Dropdown}>
              <li>
                <Link
                  key="ajout"
                  href={{ pathname: 'http://localhost:3000/Administrateur/CPM/Projet' }}
                  className={style.active2}
                >
                  <i className="fas fa-plus"></i>
                  <span className={style.span}>Gérer mes projets</span>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: 'http://localhost:3000/Administrateur/CPM/Activite' }}>
                <i className="fas fa-spinner"></i>
                  <span className={style.span}>Gérer mes activités</span>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: 'http://localhost:3000/Administrateur/CPM/Resource' }}>
                  <i className="fas fa-cogs"></i>
                  <span className={style.span}>Gérer mes Resources</span>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: 'http://localhost:3000/Administrateur/CPM/Suivre' }}>
                  <i className="far fa-eye"></i>
                  <span className={style.span}>suivie d'une activité</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
