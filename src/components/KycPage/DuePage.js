import React from "react";
import "./Kyc.css";
function DuePage() {
  return (
    <>
      <div className="container-Audit">
        <section className="margin-10 audit-section">
          <div className="container-wrapper">
            <div className="d-flex">
              <div className="audit-hero">
                <h2 style={{ lineHeight: "0px" }}>Blockaudit</h2>
                <h1>Penetration Test</h1>
                <p>What is Penetration test (pen test) in crypto?</p>
                <br/>
                <a className="btn fs-20px white weight-4 pointer" href="/">
                  Request A Quote Now!
                </a>
              </div>
              <div className="audit-img">
                <img
                  src="images/pentest.png"
                  alt="img"
                  className="pentest"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container-wrapper">
          <div className="box-info-pen">
            <h3>
              Penetration test in crypto is the assessments and simulated test
              in blockchain network by attacking by top security specialists.
              The pentester are highly qualified and have a deep knowledge about
              blockchain operations.
            </h3>
          </div>
        </section>

        <section className="audit-section-2">
          <div className="container-wrapper">
            <div className="img-up">
              <img
                className=""
                src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/Audit-pdf/Kyc-audit/Rectangle_72.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662406492638"
                alt="nh"
              />
            </div>

            <div className="d-flex">
              <div className="due-img-2">
                <div className="audit-img">
              
                  <img
                    className="img-h1"
                    src="images/pen-benfit.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="audit-hero">
                <h1>Benifits of Pentest.</h1>
                <p>
                  Any bugs or security risk is well identified by attacking
                  simulation.
                </p>
                <p>
                  Security risk is reduced to a great extent by identifying and
                  implementing appropriate security controls..{" "}
                </p>
                <p>
                  The security posture is improved by attacking from different
                  aspects.{" "}
                </p>

                {/* <a className='btn-2 fs-20px white weight-4 pointer' href='/'>Request A Quote Now!</a> */}
              </div>
            </div>
          </div>
        </section>

        <section className="audit-section">
          <div className="container-wrapper">
            <div className="d-flex">
              <div className="audit-hero">
                <div>
                  <h1>What we offer?</h1>
                </div>
                <p>
                  we do test on web applications by focusing vulnerabilities in
                  web applications that interact with a blockchain system.
                </p>
                <p>
                  We focus on vulnerabilities in application programming
                  interfaces (APIs) that are used to interact with a blockchain
                  system.
                </p>
                <p>We do a proper test on network infrastructure.</p>
                <p>
                  We test everything in the operating systems and other software
                  systems that are used to support a blockchain system.
                </p>
              </div>

              <div className="audit-img-7">
                <img
                  src="images/offer.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="audit-section">
          <div className="d-grid">
            <div>
              <div className="due-box">
                <img
                  src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/Audit-pdf/icon/five-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662394272022"
                  alt="g"
                />
                <p>Comparison Metrics</p>
              </div>
            </div>

            <div>
              <div className="due-box">
                <img
                  src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/Audit-pdf/icon/Group_44.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662394272358"
                  alt="g"
                />
                <p>BlockAudit Trust Score</p>
              </div>
            </div>

            <div>
              <div className="due-box">
                <img
                  src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/Audit-pdf/icon/Rectangle_85.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662394272264"
                  alt="g"
                />
                <p>Comprehensive Category Coverage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="audit-section">
          <div className="container-wrapper"></div>
          <div className="d-flex mt-7">
            <div className="audit-hero block-1">
              <div className="choose-h">
                <h1>How we differ from others?</h1>
              </div>
              <br />
              <div className="ds-box">
                <p>Being security expert we guarantee your assets security.</p>
              </div>

              <div className="ds-box">
                <p>
                  Completed 2500+ crypto projects and having a great experience
                  to grow your portfolio.
                </p>
              </div>
              <div className="ds-box">
                <p>
                  Our legalisation team always keeps you regulated and
                  transparent in laws of different countries.
                </p>
              </div>
            </div>
            <div className="audit-im">
              <img
                className="block-img-2"
                src="images/differ.png"
                alt="audit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block-white">
      
        <div className="container-wrapper">
         
          <div className="text-center pd-t">
            <h2>Have a quick chat with us now;</h2>
           <br/>
            <a className="btn-2 fs-20px white weight-4 pointer" href="/">
              Request A Quote Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DuePage;
