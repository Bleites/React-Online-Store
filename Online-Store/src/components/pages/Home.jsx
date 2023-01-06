import ShippPub from "../layout/ShippPub"
import NavBar from "../layout/NavBar"
import BannerSlider from "../layout/BannerSlider"
import TopProducts from "../layout/TopProducts"
import About from "../layout/About"
import Journal from "../layout/Journal"

function Home () {
    return(
        <>
        {/* <ShippPub />
        <NavBar /> */}
        <BannerSlider />
        <TopProducts />
        <About />
        <Journal />
        </>
    )
}

export default Home