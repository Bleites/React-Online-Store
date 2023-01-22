import styles from './Reviews.module.css';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Reviews() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Reviews</h2>
			<div className={styles.grid_container}>
				<div className={styles.flex_column}>
					<p className={styles.flex_row}>
						<span>
							<FaStar className={styles.Fa_icons} />
							<FaStar className={styles.Fa_icons} />
							<FaStar className={styles.Fa_icons} />
							<FaStar className={styles.Fa_icons} />
							<FaStar />
						</span>
						Share your thoughts with other costumers
					</p>

					<p>Top Costumers Reviews</p>
				</div>

				<p className={styles.flex_column}>
					<span>
						<FaStar className={styles.Fa_icons} />
						<FaStar className={styles.Fa_icons} />
						<FaStar className={styles.Fa_icons} />
						<FaStar className={styles.Fa_icons} />
						<FaStar className={styles.Fa_icons} />
					</span>
					By Ze Manel on February 18th, 2020.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
					pariatur in odit labore nostrum molestiae animi exercitationem fugit
					totam accusamus. Rerum error ab nihil maiores minima atque voluptatem
					mollitia fugiat expedita, architecto ad? Suscipit consequuntur
					delectus debitis error est rerum? Illum pariatur, ea at cum sint quis
					non facilis fugit?
				</p>

				<a href="#">Show More Reviews</a>
			</div>
		</div>
	);
}

export default Reviews;
