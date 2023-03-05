import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import styled from "styled-components"
import Flex from "../flex/flex-component"
import Heading from "../heading/heading.components"
import PageContainer from "../page-container/page-container.component"

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Flex direction="column" alignItems="flex-start" gap="2rem">
          <Heading variant="h4" color="black">
            Socials
          </Heading>
          <Flex gap="3rem">
            <AiFillGithub size="4rem" color="black" />
            <AiFillLinkedin size="4rem" color="black" />
            <SiGmail size="4rem" color="black" />
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default Footer
const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`
const Container = styled(PageContainer)`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
