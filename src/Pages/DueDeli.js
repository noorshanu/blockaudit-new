import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";


import DuePage from "components/KycPage/DuePage";



function DueDeli() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="margin-7">
    <DuePage/>
    </div>
    
 
    <Contact />
    <Footer/>
    <Popup/>
  </div>
  )
}

export default DueDeli