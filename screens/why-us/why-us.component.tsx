import React from "react"
import styled from "styled-components"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { BsFillLightningFill } from "react-icons/bs"
import { IoSettingsSharp } from "react-icons/io5"
import { BiInfinite } from "react-icons/bi"
import Heading from "../../components/heading/heading.components"
import PageContainer from "../../components/page-container/page-container.component"
import AdvantageCard from "../../components/advantage-card/advantage-card.component"
import { title } from "process"
function WhyUs() {
  const DATA = [
    {
      Icon: AiOutlineDollarCircle,
      title: "Pricing",
      description:
        "You do not have to waste tons of money on a big corporate agencies. ",
    },
    {
      Icon: BsFillLightningFill,
      title: "Fast Response",
      description:
        "We will respond to your request within 24 hours. All your ideas and suggestions will be consulted immidiately.",
    },
    {
      Icon: IoSettingsSharp,
      title: "Latest Technologies",
      description:
        "Using the latest technologies and frameworks ensures the best performance and security of the website.",
    },
    {
      Icon: BiInfinite,
      title: "We hear your responds",
      description:
        "If you have any suggestions or ideas, we will be happy to hear them. Client satisfaction is our top priority.",
    },
  ]
  return (
    <Wrapper>
      <Content>
        <Heading variant="h2" color="black" align="center">
          What makes us different ?
        </Heading>
        <DataContainer>
          {DATA.map((item, index) => (
            <AdvantageCard
              key={index}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
              index={index}
            />
          ))}
        </DataContainer>
      </Content>
    </Wrapper>
  )
}

export default WhyUs

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20rem;
  border-top-left-radius: 100% 50%;
  border-top-right-radius: 100% 50%;
`
const DataContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15rem 0rem;
  justify-items: center;
`
const Content = styled(PageContainer)``
