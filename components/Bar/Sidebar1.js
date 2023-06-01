import Link from 'next/link'
import style from '../../styles/Sidebar.module.css'
import Image from 'next/image';
import { useState } from 'react';

export default function Sidebar() {
    const [icon,seticon]=useState(<i className="fas fa-chevron-up" aria-hidden={true} ></i>)
    const [isOpen, setIsOpen] = useState(true);

    const Dropdown = (event) => {
      event.preventDefault();
      event.stopPropagation(); 
      setIsOpen(!isOpen);
      if(isOpen){seticon(<i className="fas fa-chevron-down " aria-hidden="true"></i>);}
      else{seticon(<i className="fas fa-chevron-up" aria-hidden="true"></i>);}
    };
    const handleDropdownClick = (event) => {
      event.stopPropagation();
      setIsOpen(false);
    };
  
    return (
      <div className={style.sidebar}>
        <div className={style.logodetails}>
          <span className={style.logoname}>
          <Image src="/img/titre.png" alt="" width={180} height={40} />
          </span>
        </div>
          <ul className={style.navlinks} >
            <li >
              <Link href={{ pathname: '/'}} className={style.active}>
              <i className="far fa-calendar-check"></i>
                <span className={style.span}>Plannification</span>
              </Link>
            </li>
             <li>
              <Link href={{ pathname: '/'}}  >
                <i className="fas fa-user"></i>
                <span className={style.span}>Profil</span>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/'}}  >
                 <i className="fas fa-envelope"></i>
                <span className={style.span}>Messagerie</span>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/'}} >
                <i className="fas fa-users"></i>
                <span className={style.span}>Gérer les employes</span>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/'}} >
                <i className="fas fa-spinner"></i>
                <span className={style.span}>Mes Activités</span>
              </Link>
            </li>
        </ul>
        </div>
    )
  }
  