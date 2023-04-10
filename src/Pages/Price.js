import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";

import Pricing from "components/Pricing";

function price() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="margin-7">
    <Pricing/>
    </div>
    
 
    <Contact />
    <Footer/>
    <Popup/>
  </div>
  )
}

export default price