import loading from '../imgs/loading.svg'

import styles from './Loading.module.css'

function Loading() {
    return (
            <img className={styles.loader} src={loading} alt="Loading" />
    )

}

export default Loading