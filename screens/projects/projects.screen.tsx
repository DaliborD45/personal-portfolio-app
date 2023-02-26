import React from "react"
import styled from "styled-components"
import { ButtonLink } from "../../components/button/button.components"
import Heading from "../../components/heading/heading.components"
import { useTheme } from "styled-components"
import { useRouter } from "next/router"
function Projects() {
  const theme = useTheme()
  const router = useRouter()
  return (
    <Wrapper>
      <Parallax src="/assets/wineBg.jpg  ">
        <Heading variant="h2" color={theme.colors.red}>
          What I have built ?
        </Heading>
        <ViewButton href="https://bakusklub.sk/" target="_blank">
          View
        </ViewButton>
      </Parallax>
      {/* <Parallax src="/assets/reddit.png"></Parallax> */}
    </Wrapper>
  )
}

export default Projects
const Wrapper = styled.div``
const Parallax = styled.div<{ src: string }>`
  /* The image used */
  background-image: url(${({ src }) => src});

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
`
const ViewButton = styled(ButtonLink)`
  margin-bottom: 5rem;
`
