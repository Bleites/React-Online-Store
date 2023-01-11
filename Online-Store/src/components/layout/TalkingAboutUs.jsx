import styles from './TalkingAboutUs.module.css'

import talking01 from '../imgs/talking/talking01.png'
import talking02 from '../imgs/talking/talking02.png'
import talking03 from '../imgs/talking/talking03.png'
import talking04 from '../imgs/talking/talking04.png'
import talking05 from '../imgs/talking/talking05.png'
import talking06 from '../imgs/talking/talking06.png'
import talking07 from '../imgs/talking/talking07.png'
import talking08 from '../imgs/talking/talking08.png'

function TalkingAboutUs() {
    return(
        <div className={styles.container}>
            <h2>Talking about us</h2>
            <div className={styles.grid_container}>
                <img src={talking01} alt="talking img" />
                <img src={talking02} alt="talking img" />
                <img src={talking03} alt="talking img" />
                <img src={talking04} alt="talking img" />
                <img src={talking05} alt="talking img" />
                <img src={talking06} alt="talking img" />
                <img src={talking07} alt="talking img" />
                <img src={talking08} alt="talking img" />
            </div>
        </div>
    )
}

export default TalkingAboutUs