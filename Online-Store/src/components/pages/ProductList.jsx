import ProductCard from '../products/ProductCard';
import styles from './ProductList.module.css'


import {useEffect} from 'react'
import { useState } from 'react'

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect (() => {
        async function getProducts(){
            try { 
            const productDetails = await fetch(`https://foxcoding.net/api/getProductsList?nProducts=12`)
            .then((resp) => resp.json())
            .then((data) =>  data.data.products
            )
                console.log(productDetails)
                setProducts(productDetails);
            } catch (error) {
                
            }
        }

        getProducts();
    }, [])

    return (

        <div className={styles.container}>
            {/* ⁄isto vai ser o container grid */}

            <div> SIDE NAV</div>

            <div className={styles.grid_container}>
            {products && products.map((product) => (
                    <ProductCard image={product.image} description={"product.description"} category={product.category} price={product.price} />)
                )}
            </div>
            {/* isto vai ser as nossas 4 caixas com os produtos, que vai ter de ter também
            o evento onClick associado as 4 imagens para o passo de baixo*/}

        </div>
    )
}

export default ProductList