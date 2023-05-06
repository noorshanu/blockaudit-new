import React, { useState } from 'react';
import './Faq.css'
import {Fdata} from './Fdata'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 1rem;

    max-width: 1450px;
    margin: auto;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
 
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
    font-size: 15px;
    font-weight:400;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
 
  color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #ff1616;
  border-top: 0.5px solid #ff1616;
 
 
`;

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
   
    <IconContext.Provider value={{ color: '#ff1616', size: '25px' }}>
    
      <AccordionSection>
   
        <Container>
          {Fdata.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1><img src={item.imgs} alt="yo" className='faq-img'/> {item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
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
      </AccordionSection>
    </IconContext.Provider>
    </>
  );
};


export default Faq