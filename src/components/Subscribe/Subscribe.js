import React from 'react'
import './Sub.css'
import SubImg from '../../assets/sub.png'
function Subscribe() {
  return (
    <div className='container-wrapper'>

        <div className='sub-box'>
            <div className='sub-flex'>
                <div>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Stay ahead of the game with BlockAudit's newsletter. Get valuable insights, tips, and updates about web3 security. </p>
                    <form>
                        <input type='email' className='input-sub'/>
                        <button className='submit'>Submit</button>
                    </form>
                </div>
                <div style={{textAlign:'end'}}>
                    <img src={SubImg} className='sub-img' alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe