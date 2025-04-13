import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";


const Container = styled.div`
  display: flex;
  height : 100vh, 
  width : 100vh;
  flex-direction: column;
  justify-contnet: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width : 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const SkillsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;

  padding: 18px 36px;

  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 14px 36px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    padding: 10px 36px;
  }
`;



const SkillList = styled.div`
  background-color : black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 25px;
  flex-direction: column;
  background-color : rgb(51, 44, 57);
  font-weight: 800;
  color: white;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;

  width : 200px;
  height : 200px;

  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: background-color 0.3s ease;

  &:hover {
    filter: brightness(60%);
  }
  
  @media (max-width: 1000px) {
      font-size: 15px;
      padding: 8px 12px;
      width : 120px;
      height : 120px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    padding: 8px 12px;
    width : 90px;
    height : 90px;
  }

  @media (max-width: 270px) {
    font-size: 6px;
    padding: 6px 8px;
    width : 70px;
    height : 70px;
  }


`;
const SkillImage = styled.img`
  width: 100px;
  height: 100px;

    @media (max-width: 1000px) {
    width : 70px;
    height : 70px;
  }

  @media (max-width: 500px) {
    width : 50px;
    height : 50px;
  }

  @media (max-width: 270px) {
    width : 40px;
    height : 40px;
  }

`;


const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
      <Title>My Tech Stack</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
        
              <Skill key={`skill-${index}`}>

                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <Tilt>
                      <SkillItem key={`skill-x-${index_x}`}>
                        <SkillImage src={item.image} />
                        {item.name}
                      </SkillItem>
                    </Tilt>
                  ))}
                </SkillList>
              </Skill>
    
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
