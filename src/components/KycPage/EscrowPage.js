import React from "react";
import "./Kyc.css";
function EscrowPage() {
  return (
    <>
      <div className="container-Audit">
        <section className="margin-10 audit-section">
          <div className="container-wrapper">
            <div className="d-flex">
              <div className="audit-hero">
                <h2 style={{ lineHeight: "0px" }}>Blockaudit</h2>
                <h1> Asset Management</h1>
                <p>What is Crypto Asset Management?</p>
                <br />
                <a className="btn fs-20px white weight-4 pointer" href="/">
                  Request A Quote Now!
                </a>
              </div>
              <div className="audit-img">
                <img
                  src="images/manage/crypto.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container-wrapper">
          <div className="box-info-pen">
            <h3>
              Crypto Asset Management is the complies of all the process of
              buying, selling and managing digital assets in a mannered way from
              which maximum potential profits can be made by keeping the assets
              secure and legal.
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
                    src="images/manage/important.webp"
                    alt="img"
                  />
                </div>
              </div>
              <div className="audit-hero">
                <h1>Why it is Important ?</h1>
                <p>
                  Hackers always target to hack crypto assets. Crypto wealth
                  manager keeps your assets safe.
                </p>
                <p>
                  Cryptocurrencies are partially or fully unregulated. Assets
                  must needed to be managed legally.
                </p>
                <p>
                  Unlike traditional stock and bonds its the latest tech asset
                  class, it needs proper knowledge and analysis to manage.
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
                  A personal manager with a great expertise and experie- nce to
                  manage your portfolio.
                </p>
                <p>
                  Blockaudit security engineeers provide security to your assets
                  24*7
                </p>

                <p>
                  Compliance with all legal laws and regulations. It avoids any
                  legal problems associated with your crypto investment.
                </p>
              </div>

              <div className="audit-img-7">
                <img
                  src="images/manage/offer.webp"
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
                  src="images/main/matrix.png"
                  alt="g"
                />
                <p>Comparison Metrics</p>
              </div>
            </div>

            <div>
              <div className="due-box">
                <img
                  src="images/main/trust.png"
                  alt="g"
                />
                <p>BlockAudit Trust Score</p>
              </div>
            </div>

            <div>
              <div className="due-box">
                <img
                  src="images/main/cate.png"
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
                <p>
                  Hackers always target to hack crypto assets. Crypto wealth
                  manager keeps your assets safe.
                </p>
              </div>

              <div className="ds-box">
                <p>
                  Cryptocurrencies are partially or fully unregulated. Assets
                  must needed to be managed legally.
                </p>
              </div>
              <div className="ds-box">
                <p>
                  Unlike traditional stock and bonds its the latest tech asset
                  class, it needs proper knowledge and analysis to manage.
                </p>
              </div>
              <div className="ds-box">
                <p>
                  Volatility of crypto assets makes it difficult to make a
                  Decision for investment. Wealth manager decide safely to
                  invest.
                </p>
              </div>
            </div>
            <div className="audit-im">
              <img
                className="block-img-2"
                src="images/manage/differ.webp"
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

export default EscrowPage;
