import Footer from "../layouts/Footer";

// import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import { Helmet } from "react-helmet-async";

import DuePage from "components/KycPage/DuePage";



function DueDeli() {
  return (
    <>
     <Helmet>
        <title>Pen-test</title>
        <meta
          name="description"
          content="The only Audit Company which gives report of any Block, either its a Contract, Transaction, Rug, Liquidation, Swap or any Transfer."
        />
        <link rel="canonical" href="/pen-test" />
      </Helmet>
    <Navbar />
    
    
   
    <div className="margin-7 mb-200px ">
    <DuePage/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </>
  )
}

export default DueDeli