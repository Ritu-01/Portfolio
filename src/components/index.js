import React from "react";
import styled from "styled-components";
import { Bio } from "../data/constants"
import Typewriter from "typewriter-effect";

const HeroContainer = styled.div`
background-color: ${({theme}) => theme.card_light};
display: flex;
justify-content: center;
position: relative;
padding: 300px 30px;

//Adjusted padding for medium screens
@media screen and (max-width: 960px) {
    padding: 300px 16px;   
}

//Adjusted padding for small screen 
@media screen and (max-width: 640px){
    padding: 100px 16px;
    
}

//z-index: 2;
//clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;

  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  

  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
font-size: 50px;
font-weight: 700;
color: ${({theme}) => theme.text_primary};
line-height: 68px;

@media screen and (max-width: 960px) {
  text-align: center;
  }

@media screen and (max-width: 640px) {
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
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and  (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
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
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634;
    filter: brightness(1);
    }    
    
    
    @media screen and  (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;


const Hero = () => {
    return <div id="about">
        <HeroContainer>
            <HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>
                            Hi, I am <br/>
                            {Bio.name}
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
                    <SubTitle>{
                    Bio.description}
                    </SubTitle>
                    <ResumeButton href= {Bio.resume} target ="display"> Check Resume
                        </ResumeButton>

                    </HeroLeftContainer>
                    <HeroRightContainer>

                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroBg>

        </HeroContainer>
        Hero</div>;

};

export default Hero;