import React from "react";

import {RiAccountCircleLine  } from "react-icons/ri";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import {FaBars} from 'react-icons/fa';
import {Bio} from '../../data/constants'


const Nav = styled.div`
background-color: ${({theme}) => theme.card_light};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1 rem;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition: 0.8s all ease;
}`;
 const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    text-decoration: none;


    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

 const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;
    const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Span = styled.span`
padding: 0 4px;
font-weight: bold;
font-size: 18px;
`;
const MobileMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;
position:absolute;
top: 80px;
right: 0;
width:300px;
padding: 20px;
background: ${({theme}) => theme.card_light+99};
transition: all 0.3s ease-in-out;
transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
border-radius: 0 0 20px 20px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
opacity: ${({open}) => (open ? "1" : "0")};
z-index:  ${({open}) => (open ? "3" : "0")} ;
`;

const  MobileMenuLinks = styled(LinkR)`
color: ${({ theme }) => theme.primary};
font-weight:500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
:hover {
  color: ${({ theme }) => theme.primary};
}

`;

const GithubButton = styled.a`
background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0px 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1 rem;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;


const Navbar = ({togleTheme}) => {
    const[open, setOpen] = React.useState(false);

    return(<Nav>
        <NavContainer>
        <NavLogo to='/'>
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            < RiAccountCircleLine size="3rem" /> <Span>Portfolio</Span>
          </a>
          
        </NavLogo>
            <MobileIcon>
            <FaBars
            onClick={() => {
                setOpen(!open);
            }}/>
            </MobileIcon>
            <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            </NavItems>
            <ButtonContainer>
            <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
            </ButtonContainer>
            <ButtonContainer>
           
        </ButtonContainer>
           
        
          {open && 
           <MobileMenu open={open}>
            <MobileMenuLinks href="#about" onClick={() =>{
              setOpen(!open);
            }}> 
            About 
            </MobileMenuLinks>
            <MobileMenuLinks href="#skills" onClick={() =>{
              setOpen(!open);
            }}> 
            Skills
            </MobileMenuLinks>
            <MobileMenuLinks href="#experience" onClick={() =>{
              setOpen(!open);
            }}> 
            Experience
            </MobileMenuLinks>
            <MobileMenuLinks href="#education" onClick={() =>{
              setOpen(!open);
            }}> 
            Education
            </MobileMenuLinks>
            <MobileMenuLinks href="#projects" onClick={() =>{
              setOpen(!open);
            }}> 
            Projects
           </MobileMenuLinks>
           </MobileMenu>
          }
          </NavContainer>

                
                </Nav>
          
    );
};

export default Navbar;