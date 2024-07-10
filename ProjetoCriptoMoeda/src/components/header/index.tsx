import styles from './header.module.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'



export function Header(){
    return(
        <header className={styles.container}>
        <Link to='/'><img src={Logo} alt="Logo cripto App" /></Link>
        </header>
    )
}