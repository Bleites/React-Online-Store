import ProductCard from '../products/ProductCard';
import BannerProductList from '../layout/BannerProductList';
import FilterProduct from '../FilterProduct/FilterProduct';

import loadingImg from '../imgs/loading.svg';
// import fullBanner from '../imgs/slider/slider01-medium.jpg'

import styles from './ProductList.module.css';

import { useEffect } from 'react';
import { useState } from 'react';

function ProductList() {
	const [products, setProducts] = useState([]);

	const [filter, setFilter] = useState();
    //aqui indicamos que na pagina de produtos que é onde vamos usar este useState a pagina começe logo a
    //renderizar produtos logo pelo valor de price, assim renderiza do mais barato pro mais caro;
	const [sortBy, setSortBy] = useState('price');
    //aqui estamos a setar o sizes;
	const [size, setSize] = useState();

	const [category, setCategory] = useState();
    //aqui estamos a dizer que o limite de elementos renderizados pela API no fecth é de 9 por defeito;
	const [limit, setLimit] = useState(9);

    //função para quando fizermos um novo sort no select ele setar o fetch pelo filtro que escolhemos;
	const handlerSort = (newSortBy) => {
		setSortBy(newSortBy);
	};

    //função para quando o novo tamanho for diferente de tamanhao ele setar um novo fetch por novo tamanho escolhido;
	const handlerSize = (newSize) => {
		console.log('size: ', newSize);
		if (newSize !== size) {
			setSize(newSize);
		}
	};

    //função para quando carregar no butão adicionar mais 3 produtos ao limite;
    const loadMore = () => {
		setLimit(limit + 3);
	};

	// Preciso fazer
	// 1) setttar filtros
	// 1.1) construir algo apra receber filtros
	// 2) arranjar forma de ligar ao fetch

	useEffect(() => {
		async function getProducts() {
			try {
				// https://foxcoding.net/api/getProductsList?nProducts=25&sortBy=name&size=4
                //se o size(Tamanho) existir passas-lhe o tamanho, se não (:) passas um valor vazio
				const filterTextSize = size ? `&size=${size}` : '';
                //se a category(categoria) existir passas a categoria, se não (:) passas um valor vazio
				const filterTextCategory = category ? `&category=${category}` : '';

				const productDetails = await fetch(
                    //aqui estamos a usar o ${sortBy} porque? porque na pagina de produtos nós queremos que a
                    //lista seja renderizada sobre algo, e no useState la cima nós passamos o valor 'price'
                    //para que por defeito ao entrar na página de produtos ele renderize logo por preço
					`https://foxcoding.net/api/getProductsList?nProducts=${limit}&sortBy=${sortBy}${filterTextSize}${filterTextCategory}`
				)
					.then((resp) => resp.json())
					.then((data) => data.data.products);
				console.log(productDetails);
				setProducts(productDetails);
			} catch (error) {}
		}

		getProducts();
	}, [limit, size, category, sortBy]);

	return (
		<>
			<BannerProductList />
			{/* // sort by */}
			<FilterProduct handlerSort={handlerSort}/>

			<div className={styles.container}>

            <div className={styles.asidebar}>
                    {/* <p onClick={() => setCategory(2)}>Clicar para setar por categorias</p> */}
                    <h3>Filters</h3>
                    <br />
                    <div className={styles.filters_container}>
                        <button className={styles.dropdown_btn}>Tops</button>
                        <div  className={styles.dropdown_container}>
                            <a href="#">Jackets</a>
                            <a href="#">Sweaters</a>
                            <a href="#">Shirts</a>
                            <a href="#">Tees</a>
                            <a href="#">Polos</a>
                        </div>

                        <h2>Bottoms</h2>
                        <h2>Bags</h2>

                        <h2>Shoes</h2>
                        <ul>
                            <li><a href="#">Sneakers</a></li>
                            <li><a href="#">Boots</a></li>
                            <li><a href="#">Flip-Flops</a></li>
                        </ul>
                    </div>
                    <br />

                    {/* container dos butoes de tamanho */}
                    <div className={styles.container_column}>
                        <p>Sizes</p>
                            <div className={styles.container_flex}>
                                {/* butoes de tamanho */}
                                <div className={styles.size_btn}
                                    value="1"
                                    onClick={(event) => {
                                        handlerSize(event.target.innerText);
                                    }}
                                >
                                    1
                                </div>
                                {/* butoes de tamanho */}
                                <div className={styles.size_btn}
                                    value="2"
                                    onClick={(event) => {
                                        handlerSize(event.target.innerText);
                                    }}
                                >
                                    2
                                </div>
                                {/* butoes de tamanho */}
                                <div className={styles.size_btn}
                                    value="3"
                                    onClick={(event) => {
                                        handlerSize(event.target.innerText);
                                    }}
                                >
                                    3
                                </div>
                                {/* butoes de tamanho */}
                                <div className={styles.size_btn}
                                    value="4"
                                    onClick={(event) => {
                                        handlerSize(event.target.innerText);
                                    }}
                                >
                                    4
                                </div>
                            </div>
                        <p>See our sizing guide</p>
                    </div>
                    </div>
                
                {/* div dos produtos */}
				<div className={styles.grid_products_container}>
					{/* ⁄isto vai ser o container grid */}
                    
                    

					{products &&
						products.map((product) => (
							<ProductCard
								image={product.image}
								description={product.name}
								category={product.category}
								price={product.price}
							/>
						))}
				</div>

                
				
			</div>

			<button onClick={loadMore} className={styles.button_load}>
				<img className={styles.loader} src={loadingImg} alt="loading button" />
				Load More
			</button>
		</>
	);
}

export default ProductList;
