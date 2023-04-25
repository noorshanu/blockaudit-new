import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import Terms from "components/Terms/Terms";

function TermsAndCondition() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="mb-100px">
      <Terms/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </div>
  )
}

export default TermsAndCondition