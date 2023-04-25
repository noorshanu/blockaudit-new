import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import Privacy from "components/Privacy";
function PrivacyPolicy() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="mb-100px">
     <Privacy/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </div>
  )
}

export default PrivacyPolicy