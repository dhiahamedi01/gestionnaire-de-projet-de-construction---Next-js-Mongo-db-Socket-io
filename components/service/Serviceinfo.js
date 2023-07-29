import React, { useState } from 'react';
import Image from 'next/image';
import style from "../../styles/service.module.css";
import Servicemodel from "./Servicemodel"

export default function Serviceinfo() {
    const [services, setServices] = useState(Servicemodel());

  return (
  <div className={style.container} >
    <div className={style.services} >
    {services.map((service) => (
    <div className={style.boxcontainer} key={service.id}>
       <div className={style.box}>
          <div className={style.image}>
          <Image src={service.img} alt=""  width={100} height={100}  />
          </div>
          <h3 className={style.titre}>{service.metier}</h3>
          <p className={style.desc}>{service.desc}</p>
       </div>
    </div>
    ))}
 </div>
 </div>
  );
}
