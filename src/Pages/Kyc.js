import Footer from "../layouts/Footer";

import Contact from "../layouts/Contact";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import KycPage from "components/KycPage";
import { Helmet } from "react-helmet-async";

function Kyc() {
  return (
    <>
      <Helmet>
        <title> Consultation</title>
        <meta
          name="description"
          content="The only Audit Company which gives report of any Block, either its a Contract, Transaction, Rug, Liquidation, Swap or any Transfer."
        />
        <link rel="canonical" href="/consultation-service" />
      </Helmet>
      <Navbar />

      <div className="margin-7">
        <KycPage />
      </div>

      <Contact />
      <Footer />
      <Popup />
    </>
  );
}

export default Kyc;
