import React from 'react'

import CookieConsent from "react-cookie-consent";

function Popup() {
  return (
    <div>
    {/* Basic */}
    {/* <CookieConsent>
      This website uses cookies to enhance the user experience.
    </CookieConsent> */}

    {/* option */}
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#272727" }}
      buttonStyle={{ color: "#fff", fontSize: "13px" }}
      expires={150}
      // enableDeclineButton
      // declineButtonText="Reject"
    >
     <p style={{fontSize:'14px'}}> This website uses cookies to improve the experience. Essential cookies will be stored in order to run the website. You can accept or decline to store optional
       cookies.  </p>
    
    </CookieConsent>
  </div>
  )
}

export default Popup