import styles from './Press.module.css'

import press1 from '../imgs/press/press01.jpg'
import press2 from '../imgs/press/press02.jpg'
import press3 from '../imgs/press/press03.jpg'

import CardPress from '../sub_components/CardPress'
import LinkButton from '../sub_components/LinkButton'



function Press () {
    return(
        <div className={styles.container}>
            <h2>Press</h2>
            <div className={styles.grid_container}>
                <CardPress img={press1} text='texto 1'  />
                <CardPress img={press2} text='texto 2'  />
                <CardPress img={press3} text='texto 3'  />
            </div>
        </div>
    )
}

export default Press