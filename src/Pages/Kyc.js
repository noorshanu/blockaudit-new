import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import KycPage from "components/KycPage";



function Kyc() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="margin-7">
    <KycPage/>
    </div>
    
 
    <Contact />
    <Footer/>
    <Popup/>
  </div>
  )
}

export default Kyc