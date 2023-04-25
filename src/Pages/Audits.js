import Footer from "../layouts/Footer";

// import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";

import Project from "components/Projects";

export default function Audit() {
  return (
    <div>
    <Navbar />
    
    
   
    <div style={{marginTop:'8.2%'}}>
      <Project/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </div>
  )
}