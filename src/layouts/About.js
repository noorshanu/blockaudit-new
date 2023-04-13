import React from "react";
import "./About.css";
import Main1 from "../assets/about/main1.png";
import Main2 from "../assets/about/main2.png";
import Main3 from "../assets/about/main3.png";
import Main4 from "../assets/about/main4.png";
import Block from '../assets/main-logo.png'
import {GrShare} from 'react-icons/gr'

function About() {
  return (
    <main>
      <section>
        <div className="container-wrapper">
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
                <button className='btn-about fs-20px white weight-4 pointer flex-btn'>Explore <GrShare style={{color:'#fff'}}/></button>
              </div>
            </div>

            <div className="boxes">
              <img src={Main2} alt="" />
              <div className="content-2">
                <p>Smart Contract</p>
                <h1>AUDITS</h1>
                <p className="con-p">
                  Trust in our expertise to ensure optimal security and
                  performance for your smart contracts within the dynamic web3
                  landscape.
                </p>
                <button>Explore</button>
              </div>
            </div>
<div className="center-logo">
  <img src={Block} alt="" />
</div>
            <div className="boxes">
              <img src={Main3} alt="" />
              <div className="content">
                <p>Smart Contract</p>
                <h1>AUDITS</h1>
                <p className="con-p">
                  Trust in our expertise to ensure optimal security and
                  performance for your smart contracts within the dynamic web3
                  landscape.
                </p>
                <button>Explore</button>
              </div>
            </div>

            <div className="boxes">
              <img src={Main4} alt="" />
              <div className="content-2">
                <p>Smart Contract</p>
                <h1>AUDITS</h1>
                <p className="con-p">
                  {" "}
                  Trust in our expertise to ensure optimal security and
                  performance for your smart contracts within the dynamic web3
                  landscape.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
