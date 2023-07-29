import styles from "../../styles/Slide.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Slide() {
  const [index, setIndex] = useState(0);
  const images = [
    { src: "/img/featured2.jpg", text: "Simplifiez la Gestion de vos ",
    text2:"PROJETS DE",text3:"CONSTRUCTION" },
    { src: "/img/featured.jpg", text: "CONSTRUISONS ENSEMBLE ",
    text2:"VOTRE",text3:"     REVE" },
    { src: "/img/featured3.jpg", text: "VOS BESOINS SONT",
    text2:"NOTRE",text3:"  ECOUTE"},
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => handleArrow("l")}
        >
          <Image src="/img/arrowl.png" width={100} height={100} alt="" />
        </div>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
              <div className={styles.textContainer}>
                <h3>{img.text}</h3>
                <h3>{img.text2}<span className={styles.textspan}>{img.text3}</span></h3>
              </div>
              <Image src={img.src} alt="" layout="fill" />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => handleArrow("r")}
        >
          <Image src="/img/arrowr.png" width={100} height={100} />
        </div>
      </div>
    </>
  );
}
