import React from 'react'
import './Price.css'
function Pricing() {
  return (
    <div className='container-Audit'>
      <div className='price-head'>
        <h1>Pricing & Plans <span className='red'>.</span></h1>
        <h4>Starts From <span className='red'>---$</span> </h4>
      </div>
      <div className='price-box'>
        <div className='Price-1'>
          <div className='box-h'>
            <h2 >KYC<span className='red'>.</span></h2>

            <h4>---$</h4>
            <span>KYC for one to three person for one project.</span>
            <div className='price-btn-box'> 
            <a href='https://t.me/BlockAuditReport' target='_blank' rel="noreferrer"  className='price-btn'> Choose</a>
            </div>
           

          </div>

        </div>


        <div className='Price-2'>
          <div className='box-h'>
            <h2>Audit<span className='red'>.</span></h2>

            <h4>---$</h4>
            <span>Our Audit cost starts from ---$. Get quote from official BlockAudit Team.</span>

            <div className='price-btn-box p2-h' > 
            <a href='https://t.me/BlockAuditReport' target='_blank' rel="noreferrer" className='price-btn'> Choose</a>
            </div>

          </div>

        </div>



        <div className='Price-1'>
          <div className='box-h'>
            <h2>Escrow<span className='red'>.</span></h2>

            <h4>---$</h4>
            <span>Escrow service for upto 5000$ deal. </span>

            <div className='price-btn-box' style={{marginTop:'10%'}}> 
            <a href='https://t.me/BlockAuditReport' target='_blank' rel="noreferrer" className='price-btn'> Choose</a>
            </div>

          </div>

        </div>
        
        </div>
        <div className='price-sub'>
          <div className='he'>
          <div className='sub-h'>
          <h1>Smart Contract Audit Pricing: </h1>
        </div>
          </div>
        
        <div className='sub-p'>
          <p>Looking for most comprehensive audit within budget? Hit our telegram and get a quote within minutes. Audit pricing depends upon the complexity, line of code in a smart contract. We understand your requirements and provide value by offering comprehensive report along with competitive prices. 
</p>
<p>
0$ Audit Initiative:<br/>
Block Audit is offering one free audit per month of project which fulfills the norms set by Block Audit. Hit our telegram to know more about this initiative.</p>


<p style={{paddingTop:'5%'}}>The security fees for the Smart Contract security audit fees vary on multiple factors:<br/>
1. BlockAudit may entirely or partially sponsor the Security Audit if the blockchain project has excellent potential, i.e.:
</p>
  <div className='sub-p-ul'>
  <ol type='a'>
                        <li>
                        a. The project team is doxed.
                        </li>
                        <li>b. The project is KYC’d</li>
                        <li>c. The blockchain project has an excellent social media following.</li>
                        <li>d. The smart contract is open-source or verified.</li>
                        <li>e. The project team has more people than the hype.</li>
                       </ol>
  </div>
 
                     
                       <div>
          <p>2. Project Audit fees may otherwise depend on: </p>
          <ol>
            <li style={{marginLeft:'5%'}}>a. Project Details:
              <ul type="i" style={{marginLeft:'5%'}}>
                <li>
                i. Code Length
                </li>
                <li>
                ii. Single or Multiple File Code
                </li>
                <li>iii. Functions in Smart Contracts </li>
                <li>  iv. Owner Privileges</li>
              </ul>

            </li>
            <li style={{marginLeft:'5%'}}>       b. Smart Contract code OpenZeppelin compliance status. </li>
            <li style={{marginLeft:'5%'}}>  c. Smart contract partially audited by BlockAudit</li>
            <li style={{marginLeft:'5%'}}>      d. Any other project audited by BlockAudit</li>
          </ol>
                       </div>

                     
                  
        </div>
        <div className='img-down'>
        <img src='https://ik.imagekit.io/l4k8brcjb/BlockAudit/Rectangle_41.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661330441144' alt='line'/>
        </div>
        
        </div>
        </div>
  )
}

export default Pricing