import { FaAngleRight } from 'react-icons/fa';

import styles from './BreadCrumbs.module.css';

function BreadCrumbs() {
	return (
		<div className={styles.container}>
			<p className={styles.sub_container}>
				Tops <FaAngleRight /> Sweaters <FaAngleRight /> Red Classic Chest Logo
				Hoodie
			</p>
		</div>
	);
}

export default BreadCrumbs;
