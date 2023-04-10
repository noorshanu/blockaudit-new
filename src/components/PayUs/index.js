import React from 'react'
import './Modal.css'
import Modal from "react-modal";
import ModSection from './ModSection';
import ModSection2 from './ModSection2';
import {CopyToClipboard} from 'react-copy-to-clipboard';



class PayUs  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activeModal: "",
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(val) {
    this.setState({ activeModal: val });
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.setState({ showModal: "" });
  }
  copyToClipboard = () => {
    this.setState({copied: true}, () => {
      setTimeout( () => {
        this.setState({copied: false})
    }, 3000)
    })
  }
  render() {
    const btnText = this.state.copied ? <span style={{fontStyle:'italic'}}>Copied</span> : 'COPY'
  return (
    <>
     <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/Vector.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660485441681" alt="" class="back"/>
    <div className='container'>
      
      <div className='modal-boxs'>

      <div class="card  mx-sm-1 p-3">
              <div class="card   shadow text-info  my-card">
                <img class="img-fluid" src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660485619141" alt="Avatar"/>
              </div>
              <div class="text-info text-center mt-3">      
                  <h4 class="card-title">BTC</h4>
                  <div className='sub-text'>
                    <span>B</span>
                    <span>T</span>
                    <span>C</span>

                  </div>
                  
              </div>
             <div class="card-footer" style={{background: "inherit", borderColor: 'inherit', marginLeft: 'auto', marginRight: 'auto'}}>
                
            <button class="card_btn"   onClick={() => this.handleOpenModal("btc")} >Pay Now </button>
             </div>


              <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "btc"
              }
              contentLabel="login Modal"
            >
               <div class="modal-content">
         <div class="mySlides">
        <div class="row-1">
          <div class="col-md-4">
            <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/qrs/BTC.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660507217761" alt='gg'/>
          </div>
          <div class="col-md-8">
            <div class="side_box">
              <h3>Bitcoin (BTC) Address</h3>
              <p class="po">* Match the Address before making payment.</p>
              <p class="po">* Use proper Network and Gas Fee for payment.</p>
              <p class="po">* Send Transaction Hash to BlockAudit (Optional). </p>
              <p class="po">* Get your receipt from BlockAudit. </p>
            </div>
            </div>
          </div>

      
        <div class="addressLine copy-box">
          <p class="caption" id="usdtBEPAddress">bc1qv8fmecamqslgxkp6rdpwxlqx86ytxpmgdts236</p>
          <CopyToClipboard text='bc1qv8fmecamqslgxkp6rdpwxlqx86ytxpmgdts236'
          onCopy={() => this.setState({copied: true})}>
         <button class="bttmm" onClick={this.copyToClipboard}> {btnText} </button>
        </CopyToClipboard>
        
          
      </div>
      </div>
   
      </div>
            <div className='close-box'>
            <button className="close" onClick={this.handleCloseModal}>Close</button>
           
            </div>
              
            </Modal>
          </div>

{/* Second model */}
              <div class="card  mx-sm-1 p-3">
              <div class="card   shadow text-info  my-card">
                <img class="img-fluid" src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660485620855g" alt="Avatar"/>
              </div>
              <div class="text-info text-center mt-3">      
                  <h4 class="card-title">BTC</h4>
                  <div className='sub-text'>
                    <img src='https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/image_11.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660646305796' alt='btc'/>

                  </div>
              
              </div>
              <div class="card-footer" style={{background: "inherit", borderColor: 'inherit', marginLeft: 'auto', marginRight: 'auto'}}>
                
                <button class="card_btn" onClick={() => this.handleOpenModal("btc2")} >Pay Now

              </button></div>
              <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "btc2"
              }
              contentLabel="login Modal"
            >
               <div class="modal-content">
         <div class="mySlides">
        <div class="row-1">
          <div class="col-md-4">
            <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/qrs/BTC2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660507219204" alt='gg'/>
          </div>
          <div class="col-md-8">
            <div class="side_box">
              <h3>BTC Instant Address</h3>
              <p class="po">* Match the Address before making payment.</p>
              <p class="po">* Use proper Network and Gas Fee for payment.</p>
              <p class="po">* Send Transaction Hash to BlockAudit (Optional). </p>
              <p class="po">* Get your receipt from BlockAudit. </p>
            </div>
            </div>
          </div>

      
        <div class="addressLine copy-box">
          <p class="caption" id="usdtBEPAddress">lnbc1p30plm6pp5ashx5z2q5g7pgm....a33rz</p>
          <CopyToClipboard text='lnbc1p30plm6pp5ashx5z2q5g7pgmlmautcawnmwjr4sypg286hmtmpuq57lxjp26tqdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhdmyc0lrykyqrlvqqqqryqqqqthqqpyrzjqw8c7yfutqqy3kz8662fxutjvef7q2ujsxtt45csu0k688lkzu3ldmyc0lrykyqrlvqqqqryqqqqthqqpysp5a68lz304l92htnvcw9rp6kx2t0dsh4mg93sml9ssd8u24x33qw3q9qypqsq654csx6ds3lv2us4h4xldx34sqlj5cy8csqm9gqsf2m0ju4rd74pzqakkd9qknr2cj3pnekpshwn6d9h0kf3pll0ktd9ugj82mh2a8qq5a33rz'
          onCopy={() => this.setState({copied: true})}>
          <button class="bttmm" onClick={this.copyToClipboard}> {btnText} </button>
        </CopyToClipboard>
      </div>
      </div>
   
      </div>
            <div className='close-box'>
            <button className="close" onClick={this.handleCloseModal}>Close</button>
            
            </div>
              
            </Modal>
          </div>
          {/* 3rd model */}
          <div class="card  mx-sm-1 p-3">
              <div class="card   shadow text-info  my-card">
                <img class="img-fluid" src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/3.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660485614480" alt="Avatar"/>
              </div>
              <div class="text-info text-center mt-3">      
                  <h4 class="card-title">ETH</h4>
                  <div className='sub-text'>
                    <span>E</span>
                    <span>R</span>
                    <span>C</span>
                    <span>2</span>
                    <span>0</span>

                  </div>
               
              </div>
              <div class="card-footer" style={{background: "inherit", borderColor: 'inherit', marginLeft: 'auto', marginRight: 'auto'}}>
                
                <button class="card_btn"  onClick={() => this.handleOpenModal("eth")}  >Pay Now

              </button></div>
              <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "eth"
              }
              contentLabel="login Modal"
            >
               <div class="modal-content">
         <div class="mySlides">
        <div class="row-1">
          <div class="col-md-4">
            <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/qrs/ETH.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660507219575" alt='gg'/>
          </div>
          <div class="col-md-8">
            <div class="side_box">
              <h3>Ethereum(ETH) Address</h3>
              <p class="po">* Match the Address before making payment.</p>
              <p class="po">* Use proper Network and Gas Fee for payment.</p>
              <p class="po">* Send Transaction Hash to BlockAudit (Optional). </p>
              <p class="po">* Get your receipt from BlockAudit. </p>
            </div>
            </div>
          </div>

      
        <div class="addressLine copy-box">
          <p class="caption" id="usdtBEPAddress">0x393Aa18E782295BA3B450FF944f2eCF04bae978F</p>
          <CopyToClipboard text='0x393Aa18E782295BA3B450FF944f2eCF04bae978F'
          onCopy={() => this.setState({copied: true})}>
          <button class="bttmm" onClick={this.copyToClipboard}> {btnText} </button>
        </CopyToClipboard>
      </div>
      </div>
   
      </div>
            <div className='close-box'>
            <button className="close" onClick={this.handleCloseModal}>Close</button>
           
            </div>
              
            </Modal>
          </div>

      </div>
      </div>
      <ModSection/>
      <ModSection2/>
      </>
       )
      
      }
  }
export default PayUs