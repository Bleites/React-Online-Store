import styles from './Product.module.css'
import { FaFacebook, FaInstagram, FaTwitter, FaRegHeart } from "react-icons/fa"

import CountButton from '../sub_components/CountButton';

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
                    console.log(productInfo)
				setProduct(productInfo);
			} catch (error) {
				console.log(error.message);
			}
		}
		getProduct();
	}, [id]);

	return (
		<>  
            {/* para irmos vendo o iD */}
			{/* <h1>{id}</h1> */}


			<div className={styles.main_content}>
				{product && (

					<div className={styles.grid_container}>

                        <div>
                            imagens miniaturas + imagem do produto
                        </div>
                        
                        <div>
						<img className={styles.big_image} src={product.image} alt="product image" />
                            <br></br>
                            <div className={styles.social_list}>
                                <span>Share this Product</span>
                                <Link to="#"><span className={styles.social_list_item}><FaFacebook/></span></Link>
                                <Link to="#"><span className={styles.social_list_item}><FaInstagram/></span></Link>
                                <Link to="#"><span className={styles.social_list_item}><FaTwitter/></span></Link>
                            </div>
                        </div>
                        
                        <div className={styles.product_details_container}>

						<p className={styles.name}>{product.name}</p>

                        <p className={styles.price}>EUR {product.price}€</p>

						<p>Description <br></br><br></br> <span className={styles.description_text}>{product.description}</span></p>

                        <p className={styles.flex}>Artisan Employment <span className={styles.description_text}>{product.quantity}</span></p>

						<p className={styles.flex}>PartnerShipg <span className={styles.description_text}>{product.partnership}</span></p>

						<p className={styles.flex}>Made In <span className={styles.description_text}>{product.madeIn}</span></p>

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
                                    <span className={styles.social_list_item}><FaRegHeart/>Add to WatchList</span>
                                </Link>
                            </span>
                        </div>
                        
                        
					</div>

					</div>

				)}
			</div>
			{/* <h2>Pagina de product</h2> */}
		</>
	);
}

export default Product;
