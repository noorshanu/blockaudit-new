import React from 'react'
import Audit from '../../assets/audit.png'
import Kyc from '../../assets/kyc.png'
import Consult from '../../assets/consult.png'
import Secure from '../../assets/secure.png'

function AboutSection() {
  return (
    <main id='about'>
        <section>
          <div className="container-wrapper">
            <div className='about-box gradient-box ' style={{position:'relative'}}>
                <div className='text-center ab-head'>
                    <h1>About Us</h1>
                </div>
              
             <div className='flex-about mb-50px'>
                <div className='d-about'>
                   
                    <p>Our personalised approach to client service, coupled with our dedication to delivering exceptional results, sets us apart as a trusted partner in the rapidly-evolving web3 ecosystem. </p>
                    <p>Partner with BlockAudit to take your web3 project to the next level and achieve unparalleled security and compliance.</p>
               
             <a href='https://t.me/BlockAuditReport' ><h2 className='reach'>Reach Out To Us</h2></a>  
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
                      <img src={Kyc}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>85+</h1>
                      <p>KYC</p>
                    </div>
                  </div>

                  <div className='a-box'>
                    <div>
                      <img src={Consult}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>20+</h1>
                      <p>Consultations</p>
                    </div>
                  </div>

                  <div className='a-box'>
                    <div>
                      <img src={Secure}  alt='new'/>
                    </div>
                    <div className='detail-box'>
                      <h1>1B $+</h1>
                      <p>Secured</p>
                    </div>
                  </div>
                    
                </div>

             </div>
            </div>
          </div>
          <div className="side-grid">

</div>
<div className="side-grid-right">

</div>
        </section>
      </main>
  )
}

export default AboutSection