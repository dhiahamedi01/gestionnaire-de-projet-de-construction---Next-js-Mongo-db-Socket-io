import Image from "next/image";
import { useRouter } from 'next/router';
import style from "../styles/back.module.css";
export default function Back() {
  const router = useRouter();
  const { name } = router.query;
    return (
      <>
      <div>
      <div className={style.pageheader}>
        <h1 className={style.text}>{ name }</h1>
      </div>
      </div>
      </>
    )
  }
  