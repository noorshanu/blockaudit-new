import React from "react";
import "./Footer.css";
import {BsTwitter,BsLinkedin,BsTelegram,BsGithub,BsMedium} from 'react-icons/bs'
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
              <p><span><BsTwitter/></span> Twitter</p>
              <p><span><BsLinkedin/></span> LinkedIn</p>
              <p><span><BsTelegram/></span> Telegram</p>
              <p><span><BsGithub/></span> Github</p>
              <p><span><BsMedium/></span>Medium</p>
              
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
