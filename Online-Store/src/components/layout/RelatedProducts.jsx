import styles from './RelatedProducts.module.css';

import { useEffect } from 'react';
import { useState } from 'react';

import RelatedProductsCard from '../products/RelatedProductsCard';

function RelatedProducts() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			try {
				const productDetails = await fetch(
					`https://foxcoding.net/api/getProductsList?nProducts=4`
				)
					.then((resp) => resp.json())
					.then((data) => data.data.products);

				setProducts(productDetails);
			} catch (error) {}
		}

		getProducts();
	}, []);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Related Products</h2>
			<div className={styles.container_grid}>
				{products &&
					products.map((product) => (
						<RelatedProductsCard
							image={product.image}
							description={product.name}
							category={product.category}
							price={product.price}
							key={product.id}
							id={product.id}
						/>
					))}
			</div>
		</div>
	);
}

export default RelatedProducts;
