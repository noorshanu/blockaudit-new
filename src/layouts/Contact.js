import React, { useEffect, useState } from "react";
import styles from "scss/layout/Contact.module.scss";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";
import { IKImage } from "imagekitio-react";
import Toast from "components/Toast";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import  { useRef } from 'react';

import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kz0dtx4', 'template_yc6e0t8', form.current, 'mnctSEDuRTEVNoe0i')
      .then((result) => {
        e.preventDefault();
        setShowToast(true);
          console.log(result.text);
          form.current.reset();
          
          
         
      }, (error) => {
          console.log(error.text);
      });
  };

  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  const [showToast, setShowToast] = useState(false);
  const toastRef = OutsideClickDetector(() => setShowToast(false));



  return (
    <div className={`${styles.wrapper} py-200px`} id="contact">
      <IKImage
        lqip={{ active: true }}
        loading="lazy"
        path={"contact-buildings.png"}
        className={styles.contactBuildings}
        alt=""
      />

      <Toast
        title="Your Response has been submited"
        state={showToast}
        stateSetter={setShowToast}
        toastRef={toastRef}
      />

      <div className="container-wrapper">
        <section>
          <div className={styles.formWrapper}>
            <header>
              <h2 className="text-center fs-34px white weight-3 mb-15px lh-1">
                We would love to hear from you,
              </h2>
              <h1 className="fs-70px weight-7 text-center white lh-1">
                Let’s <span className="red">Talk!</span>
              </h1>
            </header>
            <form onSubmit={sendEmail} ref={form}>
              <input
                type="text"
                className="fs-26px white weight-3"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                className="fs-26px white weight-3"
                placeholder="Email"
                name="email"
              />
              <input
                type="text"
                className="fs-26px white weight-3"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="fs-26px white weight-3"
                placeholder="Message"
                name="message"
              ></textarea>

              <button type="submit" className="fs-34px white weight-5 pointer" >
                Send
              </button>
            </form>
          </div>
          <aside>
            <div className="mb-40px">
              <h2 className="fs-44px white weight-5 mb-5px lh-1">Email : </h2>
              <p
                className={`${
                  isBellow1024px ? "fs-16px" : "fs-26px"
                } white weight-2`}
              >
                <a href="mailto:support@blockaudit.report" className="white "> 
                support@blockaudit.report</a>
              </p>
            </div>
            <div className="mb-40px">
              <h2 className="fs-44px white weight-5 mb-15px lh-1">
                Follow Us :
              </h2>
              <div className={styles.socialIcons}>
                <a href="https://twitter.com/BlockAudit" target="_blank" rel="noreferrer">
                  <FaTwitter color="white" />
                </a>
                <a href="https://t.me/BlockAuditReport" target="_blank" rel="noreferrer">
                  <FaTelegram color="white" />
                </a>
                <a href="https://www.linkedin.com/company/blockaudit/" target="_blank" rel="noreferrer">
                  <FaLinkedin color="white" />
                </a>
                <a href="https://github.com/Block-Audit-Report?tab=repositories" target="_blank" rel="noreferrer">
                  <FaGithub color="white" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="fs-44px white weight-5 mb-10px lh-1">
                Address :{" "}
              </h2>
              <p
                className={`${
                  isBellow1024px ? "fs-16px" : "fs-26px"
                } white weight-2 lh-1_2`}
                style={{ maxWidth: "20em" }}
              >
                Office 1410, 14th Floor, ETA Star Building, Business Bay, Dubai,
                UAE, PO Box No. 365921
              </p>
              
            </div>
          </aside>
        </section>
      </div>
      
    </div>
  );
}

export default Contact;
