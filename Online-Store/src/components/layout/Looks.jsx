import styles from './Looks.module.css'

import look1 from '../imgs/looks/looks01.jpg'
import look2 from '../imgs/looks/looks02.jpg'
import look3 from '../imgs/looks/looks03.jpg'
import look4 from '../imgs/looks/looks04.jpg'


function Looks () {
    return(
        <div className={styles.container}>
            <h2>Looks</h2>
            <div className={styles.grid_container}>
                <img src={look1} alt="look 1" />
                <img src={look2} alt="look 2" />
                <img src={look3} alt="look 3" />
                <img src={look4} alt="look 4" />
            </div>
        </div>
    )
}

export default Looks