import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Popup from "../components/Popup";
import EscrowPage from "components/KycPage/EscrowPage";

function Escrow() {
  return (
    <div>
      <Navbar />

      <div className="margin-7">
        <EscrowPage />
      </div>

      <br />
      <Footer />
      <Popup />
    </div>
  );
}

export default Escrow;
