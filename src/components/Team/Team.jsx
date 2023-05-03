import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import CotImg from "../../assets/about/cot.png";

import DefiImg from "../../assets/about/99defi.jpg";
import PttImg from "../../assets/about/potent.jpg";
import AcedImg from "../../assets/about/aced.jpg";
import "./Team.css";
import styles from "scss/layout/Business.module.scss";
import useMediaQuery from "hooks/useMediaQuery";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import "swiper/components/effect-coverflow/effect-coverflow.scss";
import TeamMobo from "./TeamMobo";

SwiperCore.use([Navigation, EffectCoverflow]);

export default function SwiperCoverflow() {
  const isBellow500px = useMediaQuery("(max-width : 31.25em)");
  return (
    <>
      <div className="container-wrapper">
        <div className={styles.wrapper}>
          <header
            className={isBellow500px ? "mb-20px " : "mb-120px mt-120px r"}
          >
            <div className="container-wrapper pad ">
              <h1 className="text-center fs-64px testi white weight-6 lh-1 font-space">
                Testimonials
              </h1>
            </div>
          </header>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="black-grad-left"></div>
        <div className="black-grad-right"></div>

        <div className="container-wrapper">
          <div className="mobo-info">
            <TeamMobo />
          </div>
          <div className="team-desktop">
            <div className="team-desktop-glowing-animation"></div>

            <Swiper
              navigation
              pagination={{ clickable: true }}
              slidesPerView={2}
              spaceBetween={30}
              initialSlide={2}
              loop={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: -21,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
            >
              <SwiperSlide>
                <div className="team-box">
                  <img src={CotImg} alt="" className="colon" />
                  <div className="team-details">
                    <p>
                    BlockAudit team is knowledgeable, responsive, and committed to security and risk management.
                    </p>

                    <p>
                    They are reliable, efficient, and have been a valuable partner for many teams seeking smart contract audit services. I highly recommend BlockAudit to anyone looking for a top-tier firm to ensure the security and success of their web3 project.
                    </p>
                  </div>
                  <div className="avatar-flex">
                   

                   
                    <div>
                      <img src={DefiImg} alt="" />
                    </div>
                    <div>
                    <a href="https://twitter.com/99DEFIp2p" target="_blank" rel="noreferrer">
                      <p className="user-name">99DEFI</p>
                      {/* <p className="desi">Web3 Warriors</p> */}
                      <p className="user-social">@99DEFIp2p</p>
                      </a>
                    </div>
                   
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="team-box">
                  <img src={CotImg} alt="" className="colon" />
                  <div className="team-details">
                    <p>
                      BlockAudit exceeded our expectations in providing
                      exceptional Smart Contract Auditing and Risk Management
                      services.
                    </p>

                    <p>
                      Their experienced team, in-depth knowledge, and
                      personalized approach made working with them an absolute
                      pleasure. We highly recommend BlockAudit for top-tier web3
                      project security and compliance services.
                    </p>
                  </div>
                  <div className="avatar-flex">
                    <div>
                      <img src={PttImg} alt="" />
                    </div>
                    <div>
                    <a href="https://twitter.com/potent_coin" target="_blank" rel="noreferrer">
                      <p className="user-name">Potent Coin</p>
                      {/* <p className="desi">Web3 Warriors</p> */}
                      <p className="user-social">@potent_coin</p>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="team-box">
                  <img src={CotImg} alt="" className="colon" />
                  <div className="team-details">
                    <p>
                      The team at BlockAudit consists of professionals with
                      extensive skills and experience who are committed to
                      delivering exceptional smart contract audit services
                    </p>

                    <p>
                      Their work reflects their dedication to excellence, and
                      they offer excellent communication, support, and
                      responsiveness, making them an ideal partner for any team
                      in need of smart contract audit services.
                    </p>
                  </div>
                  <div className="avatar-flex">
                    <div>
                      <img src={AcedImg} alt="" />
                    </div>
                    <div>
                    <a href="https://twitter.com/AceDCoin" target="_blank" rel="noreferrer">
                      <p className="user-name">AceD Coin</p>
                      
                      <p className="user-social">@AceDCoin</p>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

        
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
