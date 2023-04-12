import React from "react";
import './About.css'
import Main1 from '../assets/about/main1.png'
import Main2 from '../assets/about/main2.png'



function About() {
  return (
   


      <main>
        <section>
          <div className="container-wrapper">
            <div className='text-center why-head'>
              <h1>What We Offer</h1>
              <p>We specialize in providing a range of services tailored to web3 projects. At BlockAudit, our dedicated team delivers expert support and customized solutions to ensure your project thrives in the ever-changing digital landscape.</p>
         
            </div>

            <div className="grid-about">

              <div>
                <img src={Main1} alt=""/>
                <div className="content">
                  <p>Smart Contract</p>
                  <h1>AUDITS</h1>
                  <p>Trust in our expertise to ensure optimal security and performance for your smart contracts within the dynamic web3 landscape.</p>
                  <button>Explore</button>

                </div>
              </div>

              <div>
                <img src={Main2} alt=""/>
                <div className="content">
                  <p>Smart Contract</p>
                  <h1>AUDITS</h1>
                  <p>Trust in our expertise to ensure optimal security and performance for your smart contracts within the dynamic web3 landscape.</p>
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
