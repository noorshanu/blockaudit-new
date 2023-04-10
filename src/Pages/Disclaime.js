import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import Disclaime from "components/Disclaime";

function Disclaimes() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="mb-100px">
      <Disclaime/>
    </div>
    
 
    <Contact />
    <Footer/>
    <Popup/>
  </div>
  )
}

export default Disclaimes