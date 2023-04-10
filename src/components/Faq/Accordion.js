import React, { useState } from 'react';
import { Data } from './Data';
import './Faq.css'
import styles from "scss/layout/Business.module.scss";
import useMediaQuery from "hooks/useMediaQuery";
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Faq from './Faq';
const AccordionSection = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 3rem;

    max-width: 1450px;
    margin: auto;
    // padding-top:10%;
    
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
 
`;

const Container = styled.div`
  // position: absolute;
  // top: 30%;
  // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  height:100%;
`;

const Wrap = styled.div`
background: #27272700;
color: #fff;
display: flex;
padding:10px 20px 10px 5px;
border-bottom: 0.2px solid #ffffff38;
border-top: 0.2px solid #fff6;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // text-align: center;
  cursor: pointer;
  h1 {
    padding:20px 0px 20px 5px;
    font-size: 17px;
    font-weight:400;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
 
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #ff1616;
  border-top: 0.5px solid #ff1616;
 
`;


const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  const isBellow500px = useMediaQuery("(max-width : 31.25em)");


  return (
    <> 
      <div className={styles.wrapper} >
      <header className={isBellow500px ? "mb-20px" : "mb-120px mt-120px"}>
        <div className="container-wrapper pad ">
          <h1 className="text-center fs-84px white weight-6 lh-1">
            FAQS
          </h1>
        </div>
      </header>
</div>
    <IconContext.Provider value={{ color: '#ff1616', size: '25px' }}>
      <AccordionSection>
        {/* <div className='header'><h1>FAQS</h1></div> */}
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                 
                  
                 <h1><img src={item.imgs} alt="yo" className='faq-img'/> {item.question}</h1>
                  <span>{clicked === index ? <FiMinus  className='icon-1'/> : <FiPlus className='icon-2' />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
        <Container>
         <Faq/>
        </Container>
      </AccordionSection>
    </IconContext.Provider>
    </>
  );
};

export default Accordion;