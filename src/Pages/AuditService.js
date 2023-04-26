import Footer from "../layouts/Footer";

// import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";

import AuditPage from "components/KycPage/AuditPage";



function AuditService() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="margin-7 mb-200px">
    <AuditPage/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </div>
  )
}

export default AuditService