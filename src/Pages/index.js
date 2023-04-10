
import Footer from "../layouts/Footer";
import About from "../layouts/About";

// import Contact from "../layouts/Contact";

import Hero from "../layouts/Hero";
import Navbar from "../layouts/Navbar";

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
      {/* <Security /> */}
    </div>
    <div>
    
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