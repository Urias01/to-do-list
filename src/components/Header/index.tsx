import styles from './header.module.css';
import logo from '../../assets/logo.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="ToDo" className={styles.logo}/>
        </header>
    )
}