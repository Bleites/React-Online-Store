import styles from './About.module.css'

import journalImg from '../imgs/journal/small/about.jpg'

function About () {
    return(
        <div className={styles.section_container}>

            <h2>About</h2>

            <div className={styles.container}>

                <div><img className={styles.img}  src={journalImg} alt="imagem de jornal" /></div>

                <div className={styles.text_content}>

                <p>The partnership between renowned Japanese fashion designer, Yohji Yamamoto and authentic sports brand, Adidas, has revolutionized the industry. Adidas represents sport, Yohji Yamamoto represents design, and both symbolize true craftsmanship. Together they have developed the future in sportswear.</p>
                        <p className={styles.fancytext}>
                            <span>Adidas and Yamamoto together since</span><br />
                            October 2002
                        </p>
                        <p>
                            <span>The symbols</span><br />
                            The "Y" stands for Yohji Yamamoto<br />
                            The "3" represents the signature Adidas three stripe logo<br />
                            the "-" signifies the link between the two
                        </p>
                </div>

            </div>
        </div>
    )
}

export default About