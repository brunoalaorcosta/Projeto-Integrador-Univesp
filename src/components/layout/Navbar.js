import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

import logo from '../../img/logo.jpg'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Quem Somos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/newproject">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contatos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/work">Trabalhe Conosco</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar
