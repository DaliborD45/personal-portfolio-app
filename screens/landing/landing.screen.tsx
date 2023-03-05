import React from "react"
import styled, { useTheme } from "styled-components"
import ContactSidebar from "../../components/contactSidebar/contactSidebar.component"
import { BsCodeSlash } from "react-icons/bs"
import PageContainer from "../../components/page-container/page-container.component"
import Heading from "../../components/heading/heading.components"
import { Button } from "../../components/button/button.components"
import Text from "../../components/text/text.components"
const Landing = () => {
  const theme = useTheme()
  return (
    <Wrapper>
      <Content>
        <Heading
          variant="h2"
          align="center"
          color={theme.colors.black}
          normalWeight
          maxWidth="90rem"
        >
          <b style={{ color: theme.colors.primary }}>Develop </b>
          apps and websites without any limits
        </Heading>
        {/* <Description style={{ color: "black" }}>lorem ipsum </Description> */}
        <Button>Contact us</Button>
      </Content>
    </Wrapper>
  )
}

export default Landing
const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  height: 90vh;
  border-bottom-left-radius: 100% 30%;
  border-bottom-right-radius: 100% 20%;
`

const Content = styled(PageContainer)`
  display: flex;
  height: 100%;
  gap: 10rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Description = styled(Text)`
  margin: 4rem 0rem 6rem 0rem;
`
