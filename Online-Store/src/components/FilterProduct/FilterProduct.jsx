import styles from './FilterProduct.module.css';

function FilterProduct(props) {
	console.log(props);
	return (
		<div className={styles.container}>
			<div className={styles.filter_container}>
				<p className={styles.fancy_text}>Sort By</p>

                {/* aqui fazemos o onChange que vai buscar a propriedade ao elemento filho para o pai
                e criamos um evento que vai buscar por props a função que criamos e vamos buscar o valor
                sempre que alteramos no select, esta prop tem de estar sempre associada no select */}
				<select
                    className={styles.select_container}
					name="filter"
					onChange={(event) => props.handlerSort(event.target.value)}
				>
					<option value="price">Price</option>
					<option value="name">Name</option>
					<option value="popularity">Popularity</option>
				</select>
			</div>
		</div>
	);
}

export default FilterProduct;
