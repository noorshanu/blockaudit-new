import React from "react";
import "./Footer.css";
import {BsTwitter,BsLinkedin,BsTelegram,BsGithub,BsMedium} from 'react-icons/bs'
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="container-wrapper">
      <div className="border-top-grad"> 
      
      </div>

      <div className="footer desk-foot">
        <div>
          <div className="logo-section">
            <img src={Logo} alt="" />
            <p>Secure your web3 future with BlockAudit's expert <br/> solutions.</p>
            <h2>contact@blockaudit.report</h2>
          </div>
        </div>

        <div>
          <div className="social-section">
            <h2>Social Media</h2>
            <div>
              <p><span><BsTwitter/> </span> Twitter</p>
              <p><span><BsLinkedin/> </span> LinkedIn</p>
              <p><span><BsTelegram/> </span> Telegram</p>
              <p><span><BsGithub/> </span> Github</p>
              <p><span><BsMedium/> </span>Medium</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="social-section">
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
          <div className="social-section">
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
              <p href="/" className="l">
                Cookies Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="footer mobile-foot">
      <div>
          <div className="logo-section">
            <img src={Logo} alt="" />
            <p>Secure your web3 future with BlockAudit's expert <br/> solutions.</p>
            <h2>contact@blockaudit.report</h2>

            <div className="mob-social">
              <span><BsTwitter/> </span> 
              <span><BsLinkedin/> </span> 
             <a href="https://t.me/BlockAuditReport" target="_blank" rel="noreferrer"> <span><BsTelegram/> </span> </a>
             <span><BsGithub/> </span> 
           <span><BsMedium/> </span>
              
            </div>
          </div>
        </div>

        <div>
          <div className="social-section">
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
          <div className="social-section">
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
              <p href="/" className="l">
                Cookies Policy
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="grey-grand"></div>
      <div className="copyright">
        <p>Copyright 2023 | All Rights Reserved</p>
        <p>Secured By: <span className="" style={{color:'#fff',  fontFamily: 'Space Grotesk',}}>BlockAudit</span> </p>
      
      </div>
    </div>
  );
}

export default Footer;
