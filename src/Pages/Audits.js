import Footer from "../layouts/Footer";

// import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import { Helmet } from "react-helmet-async";
import Project from "components/Projects";

export default function Audit() {
  return (
    <div>
           <Helmet>
      <title>Projects</title>
      <meta
      name="description"
      content="The only Audit Company which gives report of any Block, either its a Contract, Transaction, Rug, Liquidation, Swap or any Transfer."
    data-rh="true"
      />
      <link rel='canonical' href="/projects"/>
    </Helmet>
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