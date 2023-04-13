import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import CotImg from '../../assets/about/cot.png'
import AvtImg from '../../assets/about/avatar.png'
import './Team.css'

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  return (
    <div className="container-wrapper">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        slidesPerView={3}
        centeredSlides
        style={{ height: "500px" }}
      >
        <SwiperSlide
         
        >
         <div className="team-box">
          <img src={CotImg} alt=""/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
          </div>
          <div>
            <div>
              <img src={AvtImg} alt="" />
            </div>
            <div>
              <p>John Doe</p>
            </div>
          </div>

         </div>
        </SwiperSlide>
        <SwiperSlide
        
        >
                 <div className="team-box">
          <img src={CotImg} alt=""/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
          </div>
          <div>
            <div>
              <img src={AvtImg} alt="" />
            </div>
            <div>
              <p>John Doe</p>
            </div>
          </div>

         </div>
        </SwiperSlide>
        <SwiperSlide
     
        >
                <div className="team-box">
          <img src={CotImg} alt=""/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
          </div>
          <div>
            <div>
              <img src={AvtImg} alt="" />
            </div>
            <div>
              <p>John Doe</p>
            </div>
          </div>

         </div>
        </SwiperSlide>
  

        
     
    
        <SwiperSlide
        
        >
                <div className="team-box">
          <img src={CotImg} alt=""/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
          </div>
          <div>
            <div>
              <img src={AvtImg} alt="" />
            </div>
            <div>
              <p>John Doe</p>
            </div>
          </div>

         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
