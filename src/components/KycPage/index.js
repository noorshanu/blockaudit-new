import React from "react";
import "./Kyc.css";
function KycPage() {
  return (
    <>
      <div className="container-Audit">
        <section className="margin-10 audit-section">
          <div className="container-wrapper">
            <div className="d-flex">
              <div className="audit-hero">
                <h2 style={{ lineHeight: "0px" }}>Blockaudit</h2>
                <h1> Consultation</h1>
                <p>What is consultation?</p>
                <br />
                <a className="btn fs-20px white weight-4 pointer" href="/">
                  Request A Quote Now!
                </a>
              </div>
              <div className="audit-img">
                <img
                  src="images/consult/consult.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container-wrapper">
          <div className="box-info-pen">
            <h3>
              Consultation is a Service that provides advice and suggestions to
              cryptocurrency related matters. It can be for individual or
              company. The service includes blockchain technology, tokenomics,
              regulatory compliance, security, and investment strategies.
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
              <div className="due-im">
                <div className="audit-img">
              
                  <img
                    className=""
                    src="images/consult/beni.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="audit-hero">
                <h1>Benifits of consultation.</h1>
                <p>
                  By our consultation you can access to a wide range of
                  expertise like Trading, Investment, Compliance
                </p>
                <p>
                  The risk of hacking or loosing your assets through investment
                  is reduced to a great extent.
                </p>
                <p>
                  The earning efficiency with potential for your limited assets
                  increases significantly.
                </p>
                <p>
                  You can spread your business to different market through gui-
                  dance.
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
                <p>We offer investment advice according to your portfolio</p>
                <p>
                  We make business development strategies and helps you grow and
                  broaden your businesses
                </p>

                <p>
                  We guide you to run your portfolio/company with regulations
                  for cryptocurrencies and legal way.
                </p>
                <p>
                  We provide security to your assets by doing duediligence to
                  the Company in which your assets are invested.
                </p>
              </div>

              <div className="audit-img-7">
                <img
                  src="images/consult/offer.png"
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
              <div className="ds-box"></div>
            </div>
            <div className="audit-im">
              <img
                className="block-img-2"
                src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/Audit-pdf/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662234026416"
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
            <br />
            <a className="btn-2 fs-20px white weight-4 pointer" href="/">
              Request A Quote Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default KycPage;
