import React from "react"
import styled, { useTheme } from "styled-components"
import Flex from "../../components/flex/flex-component"
import Heading from "../../components/heading/heading.components"
import PageContainer from "../../components/page-container/page-container.component"
import Text from "../../components/text/text.components"
function AboutMe() {
  const theme = useTheme()
  return (
    <Wrapper>
      <Container>
        <Heading variant="h2" color={theme.colors.primary}>
        </Heading>
        <Content>
          <Flex>
            <Text color="black" lineHeight={2}>
              I am mainly a fronted developer who is passionate about creating
              and building web applications.
              <br />
              Furthermore, I am very dettermined and arranged person. Also I
              love sports and reading books.
              <br />
              My passion is learning new technologies and I am always open to
              new challenges.
              <br />
            </Text>
          </Flex>
          <Flex>
            <Heading variant="h4" color="black">
              Socials
            </Heading>
            <Heading variant="h4" color="black">
              Where can you find me?
            </Heading>
          </Flex>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default AboutMe
const Content = styled(Flex)`
  margin-top: 4rem;
`
const Container = styled(PageContainer)`
  padding: 14rem 0;
`
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightOrange};
`
