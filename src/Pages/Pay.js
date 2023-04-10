import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import PayUs from '../components/PayUs'

export default function Pay() {
  return (
    <div>
    <Navbar />
    
    
   
    <div className="margin-10">
      <PayUs/>
    </div>
    
 
    <Contact />
    <Footer/>
    <Popup/>
  </div>
  )
}
