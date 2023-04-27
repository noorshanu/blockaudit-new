
import Footer from "../layouts/Footer";
import About from "../layouts/About";

// import Contact from "../layouts/Contact";

import Hero from "../layouts/Hero";
import Navbar from "../layouts/Navbar";
import AboutSection from "components/AboutSection/AboutSection";
import Subscribe from "components/Subscribe/Subscribe";
import SwiperCoverflow from "components/Team/Team";
import Blog from "components/Blog";
import Accordion from "../components/Faq/Accordion";

import Popup from "../components/Popup";




function Home() {
  return (
    <div>
    <Navbar />
    <div className="mb-50px mt-120px">
    {/* <Partner/> */}
      <Hero />
    </div>
    <div className="mb-100px">
        <About />
      {/* <Companies /> */}
    </div>
    <div className="mb-70px">
      <SwiperCoverflow/>
    </div>
    <div className="mb-200px  mt-150px" >
    <AboutSection/>
    </div>
    <div  className="mb-100px">
    <Accordion/>
    </div>
    {/* <Business /> */}
 
{/* <News/> */}

    {/* <Contact /> */}
    <Blog/>
    <div  className="mb-100px mt-100px">
    <Subscribe/>
    </div>
    <Footer/>
    <Popup/>
  </div>
  )
}

export default Home