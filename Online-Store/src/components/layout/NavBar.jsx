import {Link} from 'react-router-dom'

import { FaShoppingCart, FaSearch, FaRegHeart, FaAngleDown} from "react-icons/fa"

import styles from './NavBar.module.css'

import logo from '../imgs/logo-online-store.png'

function NavBar () {
    return(
        <nav className={styles.navbar}>
                <div>
                <Link to="/">
                    <img src={logo} alt='home page'/>
                </Link>
                </div>

                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/productlist">Shop <span><FaAngleDown/></span></Link>
                    </li>

                    <li className={styles.item}>
                    <a href="/">Fabric <span><FaAngleDown/></span></a>
                    </li>

                    <li className={styles.item}>
                    <a href="/journal">Journal <span><FaAngleDown/></span></a>
                    </li>

                    <li className={styles.item}>
                    <a href="/">About <span><FaAngleDown/></span></a>
                    </li>
                </ul>

                <ul className={styles.list}>
                    <li className={styles.item}>
                    <a href="/">Login</a>
                    </li>

                    <li className={styles.item}>
                    <a href="/"><FaSearch/></a>
                    </li>

                    <li className={styles.item}>
                    <a href="/"><FaRegHeart/></a>
                    </li>

                    <li className={styles.item}>
                    <a href="/"><FaShoppingCart/></a>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar