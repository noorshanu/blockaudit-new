import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import CotImg from "../../assets/about/cot.png";
import AvtImg from "../../assets/about/avatar.png";
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
              // navigation

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
                      <img src={AvtImg} alt="" />
                    </div>
                    <div>
                      <p className="user-name">John Doe</p>
                      <p className="desi">Web3 Warriors</p>
                      <p className="user-social">@Web3_Warriors</p>
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
                      <img src={AvtImg} alt="" />
                    </div>
                    <div>
                      <p className="user-name">John Doe</p>
                      <p className="desi">Web3 Warriors</p>
                      <p className="user-social">@Web3_Warriors</p>
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
                      <img src={AvtImg} alt="" />
                    </div>
                    <div>
                      <p className="user-name">John Doe</p>
                      <p className="desi">Web3 Warriors</p>
                      <p className="user-social">@Web3_Warriors</p>
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
                      <img src={AvtImg} alt="" />
                    </div>
                    <div>
                      <p className="user-name">John Doe</p>
                      <p className="desi">Web3 Warriors</p>
                      <p className="user-social">@Web3_Warriors</p>
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
