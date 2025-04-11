import React from "react";
import styled from "styled-components";


/*const CardContainer = styled.div`
  display: flex; 
  gap: 20px; 
  justify-content: flex-start;
  padding: 10px;
  height: 100vh;
  width : 100vw;
  align-items: center; 

  @media only screen and (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
    display : block;
  `
*/



const CardContainer = styled.div`
  display: flex; /* Ensure cards are displayed side by side */
  gap: 50px; /* Space between the cards */
  justify-content: flex-start; /* Align the cards from the left side */
  padding: 100px;
  height: 90vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  justify-content: center;
  align-items: center; /* Vertically center the cards within the container */

  @media only screen and (max-width: 1250px) {
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
    display: flex; /* Keep flex for consistency, or change to block if stacking vertically */
    flex-direction: column; /* Stack cards vertically on smaller screens */
    padding: 10px;
  }
`;




const Card1 = styled.div`
  width: 60vw; /* Set width to 60% for Card1 */
  height: 80vh; /* Set height to 60% */
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  @media only screen and (max-width: 1250px) {
    width: 100vw;
    height: 60vh;
`;

const Card2 = styled.div`
  width: 40vw; /* Set width to 40% for Card2 */
  height: 80vh; /* Set height to 60% */
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow:hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

    @media only screen and (max-width: 1250px) {
    width: 100vw;
    height: 40vh;

`;




const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  color:purple;
`;
const Details = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  text-overflow : hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
      overflow: hidden;
  }
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  justify-content: flex-start;
`;




const ProjectCard = ({ project }) => {
  return (
    <CardContainer>
      <a href={project.webapp}>
        <Card1>
          <Image src={project.image}/>
            <Members>
                {project.member?.map((member) => (
                  <Avatar key={member.id} src={member.img}/>
                ))}
            </Members>
          
        </Card1>
      </a>

      <Card2>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>

          <Description>{project.description}</Description>
        </Details>
        
            <Button href={project.github} target = "_blank">
                View Code
            </Button>

      </Card2>
  </CardContainer>
  );
};

export default ProjectCard;
