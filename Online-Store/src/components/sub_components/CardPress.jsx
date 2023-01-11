import styles from './CardPress.module.css'

function CardPress ({img , text}) {
    return(
             <div className={styles.card}>
                <img src={img} alt="" />
                <p>{text}</p>
            </div>
    )
}

export default CardPress