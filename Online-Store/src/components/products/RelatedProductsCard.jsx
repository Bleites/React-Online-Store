import styles from './RelatedProductsCard.module.css';

function RelatedProductsCard({ image, description, category, price }) {
	return (
		<div className={styles.product_card}>
			<img src={image} className={styles.product_card_img} />
			<p>{description}</p>
			<p>{category}</p>
			<p className={styles.product_price_tag}>{price} €</p>
		</div>
	);
}

export default RelatedProductsCard;
