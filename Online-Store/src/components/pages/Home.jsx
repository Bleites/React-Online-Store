import ShippPub from "../layout/ShippPub"
import NavBar from "../layout/NavBar"
import BannerSlider from "../layout/BannerSlider"
import TopProducts from "../layout/TopProducts"
import About from "../layout/About"
import JournalSection from "../layout/JournalSection"
import Looks from "../layout/looks"
import Press from "../layout/Press"
import TalkingAboutUs from "../layout/TalkingAboutUs"

function Home () {
    return(
        <>
        {/* <ShippPub />
        <NavBar /> */}
        <BannerSlider />
        <TopProducts />
        <About />
        <JournalSection />
        <Looks />
        <Press />
        <TalkingAboutUs />
        </>
    )
}

export default Home