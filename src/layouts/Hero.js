import IconCard from "components/IconCard";
import styles from "scss/layout/Hero.module.scss";
import { IKImage } from "imagekitio-react";
import Kyc from "../assets/hero/kyc.png";
import Audit from "../assets/hero/audit.png";
import Consult from "../assets/hero/consult.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  return (
    <div className={styles.heroWrapper}>
      <div className="container-wrapper">
        <div className={styles.hero}>
          <main>
            <h2 className={`fs-50px white weight-3 lh-1 ${styles.preTitle}`}>
              Audit <span className="red">Service</span> For
            </h2>

            <Splide
              options={{
                arrows: false,
                pagination: false,
                autoWidth: false,
                gap: 30,
                autoplay: true,
                interval: 3000,
                type: "loop",
                // focus: isBellow1024px ? "center" : "center",
              }}
              className={`${styles.splideSlider} splideSlider mb-15px`}
            >
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  DApp<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  DeFi<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  GameFi<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  P2E<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  Contract<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  Token<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  Coin<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px lh-1 white weight-8">
                  Blockchain<span className="red">.</span>
                </h1>
              </SplideSlide>
            </Splide>

            <p
              className="fs-24px white weight-2 lh-1_4 mb-30px"
              style={{ maxWidth: "22em" }}
            >
              <span className="opacity-0_6">
                Audit, KYC, Escrow, and Development -<br />
              </span>{" "}
              <span className=" opacity-0_6 ">One stop solution.</span>
            </p>

            <div className={styles.icons}>
              <IconCard icon={Audit} title="Audit" />
              <IconCard icon={Kyc} title="KYC" />
              <IconCard icon={Consult} title="Consult" />
            </div>
          </main>

          <aside className="mt-30px">
            <div className=" bg-grand form-head ">
              <div className="text-center header-form">
                <h1 className="">Rapid Audit Request</h1>
                <p>Complete the form, and we'll get in touch</p>
              </div>
              <form className="h-form">
                <input
                  type="text"
                  className="fs-18px white weight-3"
                  placeholder="Source Code"
                  name="projectname"
                />
                <input
                  type="email"
                  className="fs-18px white weight-3"
                  placeholder="Email*"
                  name="email"
                />
                <input
                  type="text"
                  className="fs-18px white weight-3"
                  placeholder="Telegram / Discord"
                  name="telegram"
                />

                <div className="btn-modal">
                  <button
                    type="submit"
                    className="fs-26px white weight-5 pointer send-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Hero;
