import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import CotImg from "../../assets/about/cot.png";
import AvtImg from "../../assets/about/avatar.png";
import "./Team.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  return (
    <div className="conatiner-wrapper">
      <div className="black-grad-left">

      </div>
      <div className="black-grad-right">

</div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: -21,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "600px" }}
      >
        <SwiperSlide>
          <div className="team-box">
            <img src={CotImg} alt="" className="colon" />
            <div className="team-details">
              <p>
              BlockAudit exceeded our expectations in providing exceptional Smart Contract Auditing and Risk Management services. 


              </p>

              <p>Their experienced team, in-depth knowledge, and personalized approach made working with them an absolute pleasure. We highly recommend BlockAudit for top-tier web3 project security and compliance services.</p>
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
            <img src={CotImg} alt="" className="colon"  />
           <div className="team-details">
              <p>
              BlockAudit exceeded our expectations in providing exceptional Smart Contract Auditing and Risk Management services. 


              </p>
              
              <p>Their experienced team, in-depth knowledge, and personalized approach made working with them an absolute pleasure. We highly recommend BlockAudit for top-tier web3 project security and compliance services.</p>
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
            <img src={CotImg} alt="" className="colon"  />
            <div className="team-details">
              <p>
              BlockAudit exceeded our expectations in providing exceptional Smart Contract Auditing and Risk Management services. 


              </p>
              
              <p>Their experienced team, in-depth knowledge, and personalized approach made working with them an absolute pleasure. We highly recommend BlockAudit for top-tier web3 project security and compliance services.</p>
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
            <img src={CotImg} alt="" className="colon"  />
            <div className="team-details">
              <p>
              BlockAudit exceeded our expectations in providing exceptional Smart Contract Auditing and Risk Management services. 


              </p>
              
              <p>Their experienced team, in-depth knowledge, and personalized approach made working with them an absolute pleasure. We highly recommend BlockAudit for top-tier web3 project security and compliance services.</p>
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
  );
}
