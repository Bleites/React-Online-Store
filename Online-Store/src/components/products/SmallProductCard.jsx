import styles from './SmallProductCard.module.css'

function SmallProductCard ({image}) {
    return(
        <div className={styles.product_card}>
            <img src={image} className={styles.product_card_img} />
        </div>
    )
}

export default SmallProductCard