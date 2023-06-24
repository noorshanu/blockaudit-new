import Home from 'Pages';
import Disclaime from 'Pages/Disclaime';
import Pay from 'Pages/Pay';
import Audits from 'Pages/Audits'
import PrivacyPolicy from 'Pages/PrivacyPolicy';
import TermsAndCondition from 'Pages/TermsAndCondition';
import {BrowserRouter as Router,Routes, Route, useLocation } from 'react-router-dom'
import Cookies from './Pages/Cookies'
import Price from 'Pages/Price';
import Kyc from 'Pages/Kyc';
import AuditService from 'Pages/AuditService';
import DueDeli from 'Pages/DueDeli';
import Escrow from 'Pages/Escrow';
import { useEffect } from 'react';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
       <ScrollToTop />
    <Routes>
    <Route  exact path='/' element={<Home/>}  />
    <Route  exact path='/cookies' element={<Cookies/>}  />
    <Route  exact path='/terms-condition' element={<TermsAndCondition/>}  />
    <Route  exact path='/privacy-policy' element={<PrivacyPolicy/>}  />
    <Route exact path='/disclaimer' element={<Disclaime/>}/>
    <Route exact path='/pay' element={<Pay/>}/>
    <Route exact path='/projects' element={<Audits/>}/>
    <Route exact path='/price' element={<Price/>}/>
    <Route exact path='/kyc-service' element={<Kyc/>}/>
    <Route exact path='/audit-service' element={<AuditService/>}/>
    <Route exact path='/management' element={<Escrow/>}/>
    <Route exact path='/pen-test' element={<DueDeli/>}/>

  
    

    </Routes>
  
  </Router>
  );
}

export default App;
