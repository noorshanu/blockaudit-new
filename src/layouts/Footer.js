import React from "react";
import "./Footer.css";
import {BsTwitter,BsLinkedin,BsTelegram,BsGithub,BsMedium} from 'react-icons/bs'
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
            <h2>support@blockaudit.report</h2>
          </div>
        </div>

        <div>
          <div className="social-section">
            <h2>Social Media</h2>
            <div>
            <p> <a href="https://t.me/BlockAuditReport" target="_blank" rel="noreferrer" className="pointer"><span><BsTelegram/></span> Telegram</a>  </p> 
              <p><a href="https://www.linkedin.com/company/block-audit-report" target="_blank" rel="noreferrer" > <span><BsLinkedin/> </span> LinkedIn</a></p>
              <p><a href="https://twitter.com/BlockAudit" target="_blank" rel="noreferrer" ><span> <BsTwitter/> </span> Twitter</a> </p>
              <p><a href="https://github.com/Block-Audit-Report" target="_blank" rel="noreferrer" ><span><BsGithub/> </span> Github</a> </p>
              <p><a href="https://blockauditreport.medium.com/" target="_blank" rel="noreferrer"><span><BsMedium/> </span>Medium</a> </p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="social-section">
            <h2>Services</h2>
            <div>
              <Link to='/audit-service'><p>Audits</p></Link>
            
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
              <Link to='/privacy-policy'>  <p className="">
                Privacy Policy
              </p></Link>
            
            <Link to='/disclaimer'>
            <p className="">
                Disclaimer{" "}
              </p>
            </Link>
             
            <Link to='/terms-condition'>
            <p className="">
                T & C{" "}
              </p>
            </Link>

            <Link to='/cookies'>
            <p className="">
            Cookies Policy
              </p>
            </Link>
          
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
            <h2>support@blockaudit.report</h2>

            <div className="mob-social">
            <p> <a href="https://t.me/BlockAuditReport" target="_blank" rel="noreferrer" className="pointer"><span> <BsTelegram/></span> </a>  </p> 
              <p><a href="https://www.linkedin.com/company/block-audit-report" target="_blank" rel="noreferrer" > <span><BsLinkedin/> </span> </a></p>
              <p><a href="https://twitter.com/BlockAudit" target="_blank" rel="noreferrer" ><span><BsTwitter/> </span> </a> </p>
              <p><a href="https://github.com/Block-Audit-Report" target="_blank" rel="noreferrer" ><span><BsGithub/> </span> </a> </p>
              <p><a href="https://blockauditreport.medium.com/" target="_blank" rel="noreferrer"><span><BsMedium/> </span></a> </p>
              
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
              <Link to='/privacy-policy'>  <p className="">
                Privacy Policy
              </p></Link>
            
            <Link to='/disclaimer'>
            <p className="">
                Disclaimer{" "}
              </p>
            </Link>
             
            <Link to='/terms-condition'>
            <p className="">
                T & C{" "}
              </p>
            </Link>

            <Link to='/cookies'>
            <p className="">
            Cookies Policy
              </p>
            </Link>
          
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
