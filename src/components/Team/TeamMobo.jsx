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
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
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
       
      
      </Swiper>
    </>
  );
}
