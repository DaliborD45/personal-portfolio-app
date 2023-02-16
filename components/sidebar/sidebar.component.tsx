import React from "react";
// import {motion,AnimatePresence} from "framer-motion";
import styled from "styled-components";
function Sidebar() {
  return (
    <Wrapper>
      <NavMenu>
        <NavMenuLink>About me</NavMenuLink>
        <NavMenuLink>Skills</NavMenuLink>
        <NavMenuLink>Contact</NavMenuLink>
      </NavMenu>
    </Wrapper>
  );
}

export default Sidebar;
const Wrapper = styled.div`
    width:10rem;
    height:100vh;
    background-color:black;
    
`;
const NavMenu = styled.div`
  display:flex;
  text-align:center;
  align-items:center;
  height:100%;
  gap:40px;
`;
const NavMenuLink = styled.a`

`;