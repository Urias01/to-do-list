import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src="/logo.png" alt="ToDo" className={styles.logo}/>
        </header>
    )
}