import styles from './NoticeCard.module.css'

import imgJournal from '../imgs/journal/journal01.jpg'

function NoticeCard () {
    return(
        <div className={styles.container}>
            <p className={styles.fancytext}>Awards - January 2006</p>
            <h3>Royal Designer for Industry</h3>
            <p>The title "Royal Designer for Industry" (RDI) is awarded annually by the RSA to designers of all disciplines who have achieved "sustained design excellence.</p>
            <div>
                <img className={styles.img_container} src={imgJournal} alt="notice image"/>
            </div>
        </div>
    )
}

export default NoticeCard