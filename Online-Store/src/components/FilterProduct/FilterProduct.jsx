import styles from './FilterProduct.module.css'

function FilterProduct () {
    return(
        <div className={styles.container}>
            <div className={styles.filter_container}>
                <p>Sort By</p>
                <select name="filter">
                    <option value="all">All Products</option>
                    <option value="price">Price</option>
                    <option value="category">Category</option>
                </select>
            </div>
        </div>
    )
}

export default FilterProduct