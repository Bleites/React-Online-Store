import styles from './BannerProductList.module.css'

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import bannerImg from '../imgs/slider/slider01.jpg'
import bannerImg2 from '../imgs/slider/slider01-small.jpg'
import bannerImg3 from '../imgs/slider/slider01-medium.jpg'

function BannerProductList () {
    return(
        <section className={styles.container}>
                <img srcSet={bannerImg3} />
        </section>
    )
}

export default BannerProductList