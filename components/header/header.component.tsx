import React from "react";
import styled from "styled-components";
import { BiMenuAltLeft } from "react-icons/bi";
import {useTheme} from "styled-components"
import { HoverText } from "../hoverText/hoverText.component";
function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <Content>
        <LeftPart>
          <HoverText fontSize="1.5rem" fontWeight="700" color="white">
            Kontakt
          </HoverText>
        </LeftPart>
        <MiddlePart></MiddlePart>
        <RightPart>
          <Text>Menu</Text>
          <BiMenuAltLeft
            style={{ color: theme.colors.primary, marginTop: "-1rem" }}
            size="4rem"
          />
        </RightPart>
      </Content>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  z-index: 1000;
  position: sticky;
  top: 0px;
  background-color: black;
  width: 100;
  display: flex;
  height: 6rem;
  align-items: center;
`;
const Content = styled.div`
  width: 94%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftPart = styled.div``;
const MiddlePart = styled.div``;
const RightPart = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.p`
  color:white
  font-size: 1rem;
  font-weight: 600;
`;
