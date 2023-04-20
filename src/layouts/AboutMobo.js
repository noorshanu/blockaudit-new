import React from 'react'
import { RiShareBoxFill } from "react-icons/ri";

const MobBox = ({ title, mainTitle, details, variant = 0 }) => {
    return (
      <div className="box-mobo">
       
  
        <div className="content">
          <p>{title}</p>
          <h1>{mainTitle}</h1>
          <p className="con-p">{details}</p>
          <button className="btn-about fs-20px white weight-4 pointer flex-btn">
            Explore{" "}
            <span style={{ color: "#fff" }}>
              <RiShareBoxFill />
            </span>{" "}
          </button>
        </div>
      </div>
    );
  };
function AboutMobo() {
  return (
    <div className="container-wrapper">
       

        <MobBox 
              title="Smart Contract"
              mainTitle="AUDITS"
              details="Trust in our expertise to ensure optimal security and performance for your smart contracts within the dynamic web3 landscape."
            />

            <MobBox 
             
              title="Advanced"
              mainTitle="Pen Test"
              details="Utilising advanced techniques to identify and eliminate potential security risks, you can rest assured that your project is secure and optimised."
            />

        

            <MobBox 
             
              title="Risk"
              mainTitle="Management"
              details="Ensure industry-standard methodologies to evaluate your projects risk profile and identify and mitigate potential threats to your digital infrastructure."
            />

            <MobBox 
            
              title="Security Policy"
              mainTitle="Consultation"
              details="We develop customised security policies and provide guidance on regulatory compliances, risk management, and incident response planning."
            />
    
    
    </div>
  )
}

export default AboutMobo