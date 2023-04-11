
import Footer from "../layouts/Footer";
import About from "../layouts/About";

// import Contact from "../layouts/Contact";

import Hero from "../layouts/Hero";
import Navbar from "../layouts/Navbar";
import AboutSection from "components/AboutSection/AboutSection";
import Subscribe from "components/Subscribe/Subscribe";
import SwiperCoverflow from "components/Team/Team";

// import Popup from "../components/Popup";




function Home() {
  return (
    <div>
    <Navbar />
    <div className="mb-100px mt-120px">
    {/* <Partner/> */}
      <Hero />
    </div>
    <div className="mb-300px">
        <About />
      {/* <Companies /> */}
    </div>
    <div className="mb-200px">
      <SwiperCoverflow/>
    </div>
    <div className="mb-200px">
    <AboutSection/>
    </div>
    <div  className="mb-200px">
    <Subscribe/>
    </div>
    {/* <Business /> */}
 {/* <Accordion/> */}
{/* <News/> */}
{/* <Blog/> */}
    {/* <Contact /> */}

    <Footer/>
    {/* <Popup/> */}
  </div>
  )
}

export default Home