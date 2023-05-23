import Footer from "../layouts/Footer";

// import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";

import AuditPage from "components/KycPage/AuditPage";

import { Helmet } from "react-helmet-async";

function AuditService() {
  return (
    <>
     <Helmet>
      <title>Audit Service</title>
      <meta
      name="description"
      content="The only Audit Company which gives report of any Block, either its a Contract, Transaction, Rug, Liquidation, Swap or any Transfer."
   
      />
      <link rel='canonical' href="/audit-service"/>
    </Helmet>
    <Navbar />
    
    
   
    <div className="margin-7 mb-200px">
    <AuditPage/>
    </div>
    
 
    {/* <Contact /> */}
    <Footer/>
    <Popup/>
  </>
  )
}

export default AuditService