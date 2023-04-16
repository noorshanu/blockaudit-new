import React from "react";
import "./About.css";

import Block from "../assets/main-logo.png";
import { RiShareBoxFill } from "react-icons/ri";
import AboutMobo from "./AboutMobo";

const boxVariants = [
  "scale(1)",
  "scaleX(-1) scaleY(1)",
  "scaleX(1) scaleY(-1)",
  "scaleX(-1) scaleY(-1)",
];

const CuttedBox = ({ title, mainTitle, details, variant = 0 }) => {
  return (
    <div className="boxes">
      <div
        className={`cutted-box-wrapper `}
        style={{ transform: boxVariants[variant] }}
      >
        <div className="cutted-box-wrapper-box">
          <img src="images/cutted-box.png" className="cutted-box" alt="" />
          <img
            src="images/cutted-box-red.png"
            className="cutted-box-red"
            alt=""
          />
          <img
            src="images/cutted-box-gradient.png"
            className="cutted-box-gradient"
            alt=""
          />
        </div>
      </div>

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
            <CuttedBox
              title="Smart Contract"
              mainTitle="AUDITS"
              details="Trust in our expertise to ensure optimal security and performance for your smart contracts within the dynamic web3 landscape."
            />

            <CuttedBox
              variant={1}
              title="Advanced"
              mainTitle="Pen Test"
              details="Utilising advanced techniques to identify and eliminate potential security risks, you can rest assured that your project is secure and optimised."
            />

            <img src={Block} className="center-logo" alt="" />

            <CuttedBox
              variant={2}
              title="Risk"
              mainTitle="Management"
              details="Ensure industry-standard methodologies to evaluate your projects risk profile and identify and mitigate potential threats to your digital infrastructure."
            />

            <CuttedBox
              variant={3}
              title="Security Policy"
              mainTitle="Consultation"
              details="We develop customised security policies and provide guidance on regulatory compliances, risk management, and incident response planning."
            />
          </div>
          <div className="mobo-info">
          <AboutMobo/>
          </div>
         
        </div>
      </section>
    </main>
  );
}

export default About;
