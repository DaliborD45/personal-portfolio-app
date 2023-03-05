import React from "react"
import styled, { useTheme } from "styled-components"
import Flex from "../../components/flex/flex-component"
import Heading from "../../components/heading/heading.components"
import PageContainer from "../../components/page-container/page-container.component"
import Text from "../../components/text/text.components"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import { ABOUT_ME_CONFIG } from "../../config/about-me.config"
function AboutMe() {
  const theme = useTheme()

  return (
    <Wrapper>
      <Container>
        <Heading variant="h2" color={theme.colors.primary}></Heading>
        <Content justifyContent="space-between">
          <Flex direction="column" alignItems="flex-start" gap="2rem">
            <Heading variant="h3" color={theme.colors.primary}>
              {ABOUT_ME_CONFIG.heading}
            </Heading>
            <Text color="black" lineHeight={2} style={{ maxWidth: "60rem" }}>
              {ABOUT_ME_CONFIG.description}
            </Text>
          </Flex>
          <Flex direction="column" alignItems="flex-end" gap="2rem">
            <Heading variant="h4" color={theme.colors.black}>
              {ABOUT_ME_CONFIG.socialsHeading}
            </Heading>
            <Flex direction="column" alignItems="flex-end" gap="2rem">
              {ABOUT_ME_CONFIG.socials.map(({ Icon, link, name }, index) => {
                return (
                  <React.Fragment key={index}>
                    <Flex gap="2rem">
                      <IconHeading variant="h5" color={theme.colors.black}>
                        {name}
                      </IconHeading>
                      <Icon size="4rem" color={theme.colors.black} />
                    </Flex>
                  </React.Fragment>
                )
              })}
            </Flex>
          </Flex>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default AboutMe
const Content = styled(Flex)``
const Container = styled(PageContainer)`
  padding: 14rem 0;
`
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightOrange};
`
const IconHeading = styled(Heading)`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
