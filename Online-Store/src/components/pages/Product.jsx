import styles from './Product.module.css';
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaRegHeart,
	FaMinus,
} from 'react-icons/fa';

import CountButton from '../sub_components/CountButton';
import BannerProductList from '../layout/BannerProductList';
import Press from '../layout/Press';
import Looks from '../layout/Looks';
import Reviews from '../layout/Reviews';
import RelatedProducts from '../layout/RelatedProducts';
import RelatedProductsCard from '../products/RelatedProductsCard';
import BreadCrumbs from '../layout/BreadCrumbs';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState();

	//aqui estamos a setar o sizes;
	const [size, setSize] = useState();

	const handlerSize = (newSize) => {
		console.log('size: ', newSize);
		if (newSize !== size) {
			setSize(newSize);
		}
	};

	useEffect(() => {
		async function getProduct() {
			try {
				const productInfo = await fetch(
					`https://foxcoding.net/api/getProduct?productId=${id}`
				)
					.then((response) => response.json())
					.then((data) => data);
				console.log(productInfo);
				setProduct(productInfo);
			} catch (error) {
				console.log(error.message);
			}
		}
		getProduct();
	}, [id]);

	return (
		<div className={styles.body}>
			{/* para irmos vendo o iD */}
			{/* <h1>{id}</h1> */}

			<BreadCrumbs />

			<div className={styles.top_content}>
				{product && (
					<div className={styles.grid_container}>
						<div className={styles.img_icon_container}>
							<img className={styles.img_icon} src={product.image} alt="img" />
							<img className={styles.img_icon} src={product.image} alt="img" />
							<img className={styles.img_icon} src={product.image} alt="img" />
							<img className={styles.img_icon} src={product.image} alt="img" />
							<img className={styles.img_icon} src={product.image} alt="img" />
						</div>

						<div className={styles.big_image_container}>
							<img
								className={styles.big_image}
								src={product.image}
								alt="product image"
							/>
							<br></br>
							<div className={styles.social_list}>
								<span>Share this Product</span>
								<Link to="#">
									<span className={styles.social_list_item}>
										<FaFacebook />
									</span>
								</Link>
								<Link to="#">
									<span className={styles.social_list_item}>
										<FaInstagram />
									</span>
								</Link>
								<Link to="#">
									<span className={styles.social_list_item}>
										<FaTwitter />
									</span>
								</Link>
							</div>
						</div>

						<div className={styles.product_details_container}>
							<p className={styles.name}>{product.name}</p>

							<p className={styles.price}>EUR {product.price}€</p>

							<p>
								Description <br></br>
								<br></br>{' '}
								<span className={styles.description_text}>
									{product.description}
								</span>
							</p>

							<p className={styles.flex}>
								Artisan Employment{' '}
								<span className={styles.description_text}>
									{product.quantity}
								</span>
							</p>

							<p className={styles.flex}>
								PartnerShipg{' '}
								<span className={styles.description_text}>
									{product.partnership}
								</span>
							</p>

							<p className={styles.flex}>
								Made In{' '}
								<span className={styles.description_text}>
									{product.madeIn}
								</span>
							</p>

							<div>
								<p>Size</p>
								<div className={styles.btn_container_flex}>
									{/* butoes de tamanho */}
									<div
										className={styles.size_btn}
										value="1"
										onClick={(event) => {
											handlerSize(event.target.innerText);
										}}
									>
										1
									</div>
									{/* butoes de tamanho */}
									<div
										className={styles.size_btn}
										value="2"
										onClick={(event) => {
											handlerSize(event.target.innerText);
										}}
									>
										2
									</div>
									{/* butoes de tamanho */}
									<div
										className={styles.size_btn}
										value="3"
										onClick={(event) => {
											handlerSize(event.target.innerText);
										}}
									>
										3
									</div>
									{/* butoes de tamanho */}
									<div
										className={styles.size_btn}
										value="4"
										onClick={(event) => {
											handlerSize(event.target.innerText);
										}}
									>
										4
									</div>

									<p>Size Guidelines</p>
								</div>
								<span>Model is a US Size 2-4 Wears Matters Size.</span>
							</div>

							<div className={styles.container_btns_flex}>
								<CountButton />

								<button className={styles.cart_btn}>Add to cart</button>

								<span className={styles.flex_fav}>
									<Link to="#">
										<span className={styles.social_list_item}>
											<FaRegHeart />
											Add to WatchList
										</span>
									</Link>
								</span>
							</div>

							<div>
								<p className={styles.flex}>
									Fabric{' '}
									<span className={styles.social_list_item}>
										<FaMinus />
									</span>
								</p>

								<p className={styles.description_text_2}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quidem eligendi excepturi quia, sapiente inventore maiores.
									Expedita mollitia reprehenderit, fuga incidunt ratione eaque
									nihil deleniti dolorum laudantium. Laboriosam repellendus illo
									ab! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Vero corrupti voluptate, necessitatibus tempore beatae soluta
									sapiente recusandae eligendi alias odit pariatur laudantium
									officiis optio sequi quia illo. At, beatae illum!
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
			<BannerProductList />
			{/* <h2>Pagina de product</h2> */}

			<div className={styles.center}>
				<p className={styles.centered_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem,
					quibusdam sint sit dignissimos velit eius magni, reiciendis ex culpa
					et? Beatae accusamus, totam ex distinctio praesentium ipsa illo quo?
					Dolorum, tenetur. Alias possimus ex rerum nulla ipsa atque laboriosam
					quod nesciunt harum adipisci. Dignissimos nisi quia accusantium magnam
					suscipit cum porro, aspernatur atque! Odio maxime neque pariatur fuga
					a? Itaque, ipsum magni quo blanditiis qui vero maiores optio facere
					velit. Aut eius, excepturi.
				</p>

				<p className={styles.centered_text}>
					Delectus numquam nihil optio quos consequuntur corrupti vel beatae
					dolorem, laborum reiciendis laboriosam doloremque totam suscipit?
					Explicabo, excepturi error omnis itaque cupiditate minus,
					reprehenderit fugit enim incidunt rem iste saepe blanditiis ullam
					ducimus nisi soluta. Consequuntur, eum consectetur! Quo aliquid fuga
					itaque, corrupti numquam culpa provident! Impedit mollitia numquam hic
					nostrum? Modi nemo aut impedit, esse consequuntur ullam eius at
					voluptatem necessitatibus odit ducimus veritatis! Inventore quaerat
					neque vel nihil voluptate temporibus maiores recusandae aut sapiente.
				</p>

				<div className={styles.mod}>
					<Press />
				</div>
			</div>

			<div className={styles.mod_2}>
				<p className={styles.centered_text_2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore
					explicabo a asperiores voluptatem culpa necessitatibus adipisci quos
					nobis possimus quidem officia, reprehenderit mollitia. Repellendus non
					deleniti, officiis distinctio quia. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Dolor labore explicabo a asperiores.
				</p>
			</div>

			<Looks />

			<Reviews />

			<RelatedProducts />
		</div>
	);
}

export default Product;
