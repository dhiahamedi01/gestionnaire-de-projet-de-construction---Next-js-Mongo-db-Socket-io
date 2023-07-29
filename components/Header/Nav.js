import Navstyle from '../../styles/Nav.module.css'
import Link from 'next/link';
import Image from 'next/image';
export default function Nav() {
    return (
      <>
      <div className={Navstyle.nav}>
      <div className={Navstyle.logo}>
        <Image src="/img/logo.png" alt="Ma super image" width={200} height={40} />
      </div>

      <label for="click" className="menu-btn">  
      </label>
      <ul>
        <li><Link href="/" >Acceuil</Link></li>
        <li><Link  href={{ pathname: '../service/Service', query:{ name: 'service' } }}>Services</Link></li>
        <li><Link  href={{ pathname: '../Blog/Blog', query:{ name: 'Blog' } }}>Blog</Link></li>
        <li><Link href="/">Contact</Link></li>
        <li><Link href={{ pathname: '../propos/Information', query:{ name: 'Comment ça Marche' } }}>Comment ça Marche</Link></li>
      </ul>
      <ul>
		  <li><Link href="http://localhost:3000/Login" className={Navstyle.active}>Connexion</Link></li>
		  <li><Link href="/" className={Navstyle.active2}>Inscription</Link></li>
		</ul>
      </div>
      </>
    )
  }