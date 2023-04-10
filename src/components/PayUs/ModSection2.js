import React from 'react'
import './Modal.css'
import Modal from "react-modal";
import {CopyToClipboard} from 'react-copy-to-clipboard';


class ModSection2  extends React.Component {

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
    
    <div className='container-2'>
      
      <div className='modal-boxs'>

      <div class="card  mx-sm-1 p-3">
              <div class="card   shadow text-info  my-card">
                <img class="img-fluid" src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660485615242" alt="Avatar"/>
              </div>
              <div class="text-info text-center mt-3">      
                  <h4 class="card-title">USDT</h4>
                  <div className='sub-text'>
                    <span>B</span>
                    <span>E</span>
                    <span>P</span>
                    <span>2</span>
                    <span>0</span>

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
            <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/qrs/USDTbep20.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660507220396" alt='gg'/>
          </div>
          <div class="col-md-8">
            <div class="side_box">
              <h3>USDT (BEP20) Address</h3>
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

{/* Second model */}
              <div class="card  mx-sm-1 p-3">
              <div class="card   shadow text-info  my-card">
                <img class="img-fluid" src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/8.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660485617478" alt="Avatar"/>
              </div>
              <div class="text-info text-center mt-3">      
                  <h4 class="card-title">USDT</h4>
                  <div className='sub-text'>
                    <span>E</span>
                    <span>R</span>
                    <span>C</span>
                    <span>2</span>
                    <span>0</span>

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
            <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/qrs/USDTerc20.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660507220722" alt='gg'/>
          </div>
          <div class="col-md-8">
            <div class="side_box">
              <h3>USDT (ERC20) Address</h3>
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
          {/* 3rd model */}
          <div class="card  mx-sm-1 p-3">
              <div class="card   shadow text-info  my-card">
                <img class="img-fluid" src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/coin/9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660485618484" alt="Avatar"/>
              </div>
              <div class="text-info text-center mt-3">      
                  <h4 class="card-title">USDT</h4>
                  <div className='sub-text'>
                    <span>T</span>
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
            <img src="https://ik.imagekit.io/l4k8brcjb/BlockAudit/qrs/USDTtrc20.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660507220767" alt='gg'/>
          </div>
          <div class="col-md-8">
            <div class="side_box">
              <h3>USDT (TRC20) Address</h3>
              <p class="po">* Match the Address before making payment.</p>
              <p class="po">* Use proper Network and Gas Fee for payment.</p>
              <p class="po">* Send Transaction Hash to BlockAudit (Optional). </p>
              <p class="po">* Get your receipt from BlockAudit. </p>
            </div>
            </div>
          </div>

      
        <div class="addressLine copy-box">
          <p class="caption" id="usdtBEPAddress">TYt689ADYNfamkswDQyUghSCUnA5nbmoUW</p>
          <CopyToClipboard text='TYt689ADYNfamkswDQyUghSCUnA5nbmoUW'
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

      </>
       )
      
      }
  }
export default ModSection2