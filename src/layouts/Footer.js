import React from "react";
import "./Footer.css";

import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="container-wrapper">
      <div className="border-top-grad"> 
      
      </div>

      <div className="footer">
        <div>
          <div className="lodo-section">
            <img src={Logo} alt="" />
            <p>Secure your web3 future with BlockAudit's expert solutions.</p>
            <h2>contact@blockaudit.report</h2>
          </div>
        </div>

        <div>
          <div className="lodo-section">
            <h2>Social Media</h2>
            <div>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Telegram</p>
              <p>Github</p>
              <p>Medium</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="lodo-section">
            <h2>Services</h2>
            <div>
              <p>Audits</p>
              <p>Pen Testing</p>
              <p>Security Policies</p>
              <p>Consulting</p>
              <p>Risk Management</p>
            </div>
          </div>
        </div>

        <div>
          <div className="lodo-section">
            <h2>Other Links</h2>

            <div className="">
              <p href="/" className="">
                Privacy Policy
              </p>
              <p href="/" className="">
                Disclaimer{" "}
              </p>
              <p href="/terms-condition" className="">
                T & C{" "}
              </p>
              <a href="/" className="l">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="div-block-289">
        <div className="div-block-290">
          <div className="text-block-113">Secured by : BlockAudit🔒</div>
        </div>
        <div className="text-block-114">
          Copyright © 2022 | All Right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
