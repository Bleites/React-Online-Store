import ProductCard from '../products/ProductCard';
import BannerProductList from '../layout/BannerProductList';
import FilterProduct from '../FilterProduct/FilterProduct';

import loadingImg from '../imgs/loading.svg'
// import fullBanner from '../imgs/slider/slider01-medium.jpg'

import styles from './ProductList.module.css'

import {useEffect} from 'react'
import { useState } from 'react'



function ProductList() {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(9);


    useEffect (() => {
        async function getProducts(){
            try { 
            const productDetails = await fetch(`https://foxcoding.net/api/getProductsList?nProducts=`+limit)
            .then((resp) => resp.json())
            .then((data) =>  data.data.products
            )
                console.log(productDetails)
                setProducts(productDetails);
            } catch (error) {
                
            }
        }

        getProducts();
    }, [limit])

    const loadMore = () => {
        setLimit(limit+3)
    }

    return (
        <>
        <BannerProductList />
        <FilterProduct />
            <div className={styles.container}>
                

                <div> SIDE NAV</div>

                <div className={styles.grid_container}>
                    {/* ⁄isto vai ser o container grid */}
                {products && products.map((product) => (
                        <ProductCard image={product.image} description={product.name} category={product.category} price={product.price} />)
                    )}

                </div>
                {/* isto vai ser as nossas 4 caixas com os produtos, que vai ter de ter também
                o evento onClick associado as 4 imagens para o passo de baixo*/}

            </div>

            <button onClick={loadMore} className={styles.button_load}>
                    <img className={styles.loader} src={loadingImg} alt="loading button" />
                    Load More
                </button>
            

        </>

        
    )
}

export default ProductList