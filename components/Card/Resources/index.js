import styles from '@/styles/Blog.module.css'
import Image from 'next/image';
export default function Card({ch,ch1}) {
  return (
    <div className={styles.card}>
       <Image className={styles.img} src={ch1} width={500} height={170} alt="" ></Image>
       <h3 className={styles.h3}>{ch}</h3>
    </div>
  )
}
