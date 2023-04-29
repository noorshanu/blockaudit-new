import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import CotImg from "../../assets/about/cot.png";
import AvtImg from "../../assets/about/avatar.png";

// import required modules
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function TeamMobo() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
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
                BlockAudit exceeded our expectations in providing exceptional
                Smart Contract Auditing and Risk Management services.
              </p>

              <p>
                Their experienced team, in-depth knowledge, and personalized
                approach made working with them an absolute pleasure. We highly
                recommend BlockAudit for top-tier web3 project security and
                compliance services.
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
    </>
  );
}
