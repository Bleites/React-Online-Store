import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

function ProductCard({ image, description, category, price, id }) {
	return (
		<div className={styles.product_card}>
			<Link to={`/product/${id}`}>
				<img src={image} className={styles.product_card_img} />
				<p>{description}</p>
				<p>{category}</p>
				<p className={styles.product_price_tag}>{price} €</p>
			</Link>
		</div>
	);
}

export default ProductCard;
