import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import EscrowPage from "components/KycPage/EscrowPage";
import { Helmet } from "react-helmet-async";
function Escrow() {
  return (
    
    <>
        <Helmet>
      <title>Management</title>
      <meta
      name="description"
      content="The only Audit Company which gives report of any Block, either its a Contract, Transaction, Rug, Liquidation, Swap or any Transfer."
   
      />
      <link rel='canonical' href="/management"/>
    </Helmet>
      <Navbar />

      <div className="margin-7">
        <EscrowPage />
      </div>

      <br />
      <Footer />
      <Popup />
    </>
  );
}

export default Escrow;
