import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headTextAnimation,
} from "../../utils/motion";


const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width : 100vw;
  min-height: 100vh;
  position: relative;
  padding: 80px 30px;
  z-index: 1;


  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  width: 100vw;

  justify-content: center; /* Horizontal alignment */
  max-width: 1200px;
  height: ; 



  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`

  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: rgb(244, 244, 244);
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: rgb(173, 5, 245);
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;

  padding: 16px 0;
  border : 2px solid rgb(231, 223, 221);

  background: rgb(36, 37, 30);;

  border-radius: 50px;
  
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

// rgb(95, 0, 136)

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 8px solid rgb(74, 0, 106);


  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    border: 4px solid rgb(231, 223, 221);
  }
`;


const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>


                <SubTitle>{Bio.description}</SubTitle>


              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
                  <Img src={HeroImg} alt="Mohd Maaz" />
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
