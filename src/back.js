import Accordion from "components/Faq/Accordion";
import Footer from "layouts/Footer";
import About from "layouts/About";
import Business from "layouts/Business";
import Companies from "layouts/Companies";
import Contact from "layouts/Contact";

import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import Security from "layouts/Security";
import Partner from "components/Partner";
import Popup from "components/Popup";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
      <Partner/>
        <Hero />
      </div>
      <div className="mb-300px">
        <Companies />
      </div>
      <div className="mb-200px">
        <Security />
      </div>
      <div>
        <About />
      </div>
      <Business />
   <Accordion/>
      <Contact />
      <Footer/>
      <Popup/>
    </div>
  );
}

export default App;
