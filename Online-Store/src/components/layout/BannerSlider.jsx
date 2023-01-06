import styles from './BannerSlider.module.css'

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import bannerImg from '../imgs/slider/slider01.jpg'
import bannerImg2 from '../imgs/slider/slider01-small.jpg'
import bannerImg3 from '../imgs/slider/slider01-medium.jpg'

function BannerSlider () {
    return(
        <section className={styles.slider}>
        <div className={styles.slider_slides}>
            <div className={styles.slider_slides_slide}>
                <img srcSet={bannerImg} />
                <div className={styles.slider_slides_slide_caption}>
                    <p className={styles.h1}>
                        Yohji Yamamoto<br />
                        Y-3
                    </p>
                    <a href="#" title="Shop Now">Shop Now</a>
                </div>
            </div>
        </div>
        <a href="#" className={styles.slider_previous}><span className={styles.button_slide}><FaAngleLeft/></span></a>
        <a href="#" className={styles.slider_next}><span className={styles.button_slide}><FaAngleRight/></span></a>
    </section>
    )
}

export default BannerSlider