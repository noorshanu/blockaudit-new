import React from 'react'

import styles from "scss/layout/Hero.module.scss";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useMediaQuery from "hooks/useMediaQuery";

function AllProject() {
    const isBellow1024px = useMediaQuery("(max-width : 64em)");
  return (
    <>
    <div className='margin-5'>
     <div className="container-wrapper text-center ">
        <div className={styles.hero}>
          
          <main className='project-slide'>
            <h2 className={`fs-50px white weight-3 lh-1 ${styles.preTitle}`}>
         Click to see all <a href='https://github.com/Block-Audit-Report?tab=repositories' target='_blank' rel="noreferrer" ><span className="red">Project</span> </a>
            </h2>

            <Splide
              options={{
                arrows: false,
                pagination: false,
                autoWidth: true,
                gap: 30,
                autoplay: true,
                interval: 3000,
                type: "loop",
                focus: isBellow1024px ? "center" : "center",
                // padding: { left: isBellow1024px ? 0 : "10%" },
              }}
              className={`${styles.splideSlider} splideSlider mb-15px`}
            >
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  250+<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  Audit<span className="red">.</span>
                </h1>
              </SplideSlide>
              <SplideSlide>
                <h1 className="fs-150px white weight-8 lh-1">
                  Kyc<span className="red">.</span>
                </h1>
              </SplideSlide>
            
             
            
           
             
            </Splide>
            </main>
            </div>
            </div></div>
    </>
  )
}

export default AllProject