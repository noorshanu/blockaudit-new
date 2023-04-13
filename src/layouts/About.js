import React from "react";
import "./About.css";
import HoverImage from "react-hover-image";
import Main1 from "../assets/about/main1.png";
import Main2 from "../assets/about/main2.png";
import Main22 from "../assets/about/main22.png";
import Main3 from "../assets/about/main3.png";
import Main4 from "../assets/about/main4.png";
import Block from '../assets/main-logo.png'
import {RiShareBoxFill} from 'react-icons/ri'
import {BsTelegram} from 'react-icons/bs'

function About() {
  return (
    <main>
      <section>
        <div className="container-wrapper" >
          <div className="text-center why-head">
            <h1>What We Offer</h1>
            <p className="">
              We specialize in providing a range of services tailored to web3
              projects. At BlockAudit, our dedicated team delivers expert
              support and customized solutions to ensure your project thrives in
              the ever-changing digital landscape.
            </p>
          </div>

          <div className="grid-about">
            <div className="boxes">
              <img src={Main1} alt="" />
              <div className="content">
                <p>Smart Contract</p>
                <h1>AUDITS</h1>
                <p className="con-p">
                  Trust in our expertise to ensure optimal security and
                  performance for your smart contracts within the dynamic web3
                  landscape.
                </p>
                <button className='btn-about fs-20px white weight-4 pointer flex-btn'>Explore <span style={{color:'#fff'}}><RiShareBoxFill /></span> </button>
              </div>
            </div>

            <div className="boxes">
            <HoverImage src={Main2} hoverSrc={Main22} />
              {/* <img src={Main2} alt="" /> */}
              <div className="content-2">
                <p>Advanced</p>
                <h1>Pen Test</h1>
                <p className="con-p">
                Utilising advanced techniques to identify and eliminate potential security risks, you can rest assured that your project is secure and optimised.
                </p>
                <button className='btn-about fs-20px white weight-4 pointer flex-btn'>Explore <span style={{color:'#fff'}}><RiShareBoxFill /></span> </button>
              </div>
            </div>
<div className="center-logo">
  <img src={Block} alt="" />
</div>
            <div className="boxes">
              <img src={Main3} alt="" />
              <div className="content">
                <p>Risk</p>
                <h1>Management</h1>
                <p className="con-p">
                Ensure industry-standard methodologies to evaluate your project's risk profile and identify and mitigate potential threats to your digital infrastructure.
                </p>
                <button className='btn-about fs-20px white weight-4 pointer flex-btn'>Contact Us <span style={{color:'#fff'}}><BsTelegram /></span> </button>
              </div>
            </div>

            <div className="boxes">
              <img src={Main4} alt="" />
              <div className="content-2">
                <p>Security Policy</p>
                <h1>Consultation</h1>
                <p className="con-p">
                  {" "}
                  We develop customised security policies and provide guidance on regulatory compliances, risk management, and incident response planning.
                </p>
                <button className='btn-about fs-20px white weight-4 pointer flex-btn'>Contact Us <span style={{color:'#fff'}}><BsTelegram /></span> </button>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </main>
  );
}

export default About;
