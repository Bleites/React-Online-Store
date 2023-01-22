import styles from './TopProducts.module.css';

import ProductCard from '../products/ProductCard';

import { useEffect } from 'react';
import { useState } from 'react';

function TopProducts() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			try {
				const productDetails = await fetch(
					`https://foxcoding.net/api/getProductsList?nProducts=8`
				)
					.then((resp) => resp.json())
					.then((data) => data.data.products);
				
				setProducts(productDetails);
			} catch (error) {}
		}

		getProducts();
	}, []);

	return (
		<>
			<h1 className={styles.TopProducts_tittle}>Top Products</h1>

			<div className={styles.TopProducts_container}>
				<div className={styles.wrapper}>
					{products &&
						products.map((product) => (
							<ProductCard
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
		</>
	);
}

export default TopProducts;
