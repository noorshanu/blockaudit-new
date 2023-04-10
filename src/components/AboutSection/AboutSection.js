import React from 'react'
import Audit from '../../assets/audit.png'

function AboutSection() {
  return (
    <main>
        <section>
          <div className="container-wrapper">
            <div className='about-box gradient-box '>
                <div className='text-center ab-head'>
                    <h1>About Us</h1>
                </div>
              
             <div className='flex mb-50px'>
                <div className='d-about'>
                   
                    <p>Our personalised approach to client service, coupled with our dedication to delivering exceptional results, sets us apart as a trusted partner in the rapidly-evolving web3 ecosystem. </p>
                    <p>Partner with BlockAudit to take your web3 project to the next level and achieve unparalleled security and compliance.</p>
               
               <h2 className='reach'>Reach Out To Us</h2>
                </div>

                <div className='auit-box'>
                  <div className='a-box'>
                    <div>
                      <img src={Audit}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>350+</h1>
                      <p>Audits</p>
                    </div>
                  </div>

                  <div className='a-box'>
                    <div>
                      <img src={Audit}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>350+</h1>
                      <p>Audits</p>
                    </div>
                  </div>

                  <div className='a-box'>
                    <div>
                      <img src={Audit}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>350+</h1>
                      <p>Audits</p>
                    </div>
                  </div>

                  <div className='a-box'>
                    <div>
                      <img src={Audit}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>350+</h1>
                      <p>Audits</p>
                    </div>
                  </div>
                    
                </div>

             </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default AboutSection