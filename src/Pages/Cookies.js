
import Footer from "../layouts/Footer";

// import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import Cookie from "components/Cookie";


function Cookies() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="mb-100px">
      <Cookie/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </div>
  )
}

export default Cookies