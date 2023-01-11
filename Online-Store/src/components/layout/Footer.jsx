import styles from './Footer.module.css'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

import {Link} from 'react-router-dom'

function Footer () {
    return(
        <footer>
            <div className={styles.grid_container}>
                <div className={styles.grid_list_container}>
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#" title="About Us">About Us</a></li>
                        <li><a href="#" title="Testimonials">Testimonials</a></li>
                        <li><a href="#" title="Contact">Contact</a></li>
                        <li><a href="#" title="Journal">Journal</a></li>
                        <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className={styles.grid_list_container}>
                    <h3>Partners</h3>
                    <ul>
                        <li><a href="#" title="Support">Support</a></li>
                        <li><a href="#" title="Shipping & Returns">Shipping & Returns</a></li>
                        <li><a href="#" title="Size Guide">Size Guide</a></li>
                        <li><a href="#" title="Product Care">Product Care</a></li>
                    </ul>
                </div>
                <div className={styles.grid_list_container}>
                    <h3>Contact us</h3>
                    <p className={styles.grid_container_adress}>
                        Adi-Dassler-Strasse 1<br />
                        91074 Herzogenaurach<br />
                        Germany
                    </p>
                    <p className={styles.grid_container_adress}>+49 (0) 9132 84-0</p>
                </div>
                <div className={styles.grid_list_container}>
                    <h3>Subscribe to newsletter</h3>
                    <form className={styles.form}>
                        <div>
                            <input type="email" placeholder="Enter your email" name="email" />
                        </div>
                        <div className={styles.btn}>
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                    <div className={styles.social_list}>
                        <Link to="#"><span className={styles.social_list_item}><FaFacebook/></span></Link>
                        <Link to="#"><span className={styles.social_list_item}><FaInstagram/></span></Link>
                        <Link to="#"><span className={styles.social_list_item}><FaTwitter/></span></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer