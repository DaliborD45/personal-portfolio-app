import React from "react";
import styled from "styled-components";
import { HoverText } from "../hoverText/hoverText.component";
function ContactSidebar() {
  return (
    <Wrapper>
      <Content>
        <SocialsLink fontSize="1.2rem" fontWeight="900" color="white">dalibordetko@gmail.com</SocialsLink>
      </Content>
    </Wrapper>
  );
}

export default ContactSidebar;
const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SocialsLink = styled(HoverText)`
    transform:rotate(-90deg);
    font-size:1.2rem;
    
`;
