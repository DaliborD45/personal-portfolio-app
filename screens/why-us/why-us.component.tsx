import React from "react"
import styled from "styled-components"
import Heading from "../../components/heading/heading.components"
import PageContainer from "../../components/page-container/page-container.component"
import AdvantageCard from "../../components/advantage-card/advantage-card.component"
import { WHY_US_CONFIG } from "../../config/why-us.config"
import { motion } from "framer-motion"
function WhyUs() {
  const dataVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <Wrapper>
      <Content>
        <Heading variant="h2" color="black" align="center">
          {WHY_US_CONFIG.heading}
        </Heading>
        <DataContainer>
          {WHY_US_CONFIG.data.map((item, index) => (
            <motion.div
              key={index}
              variants={dataVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AdvantageCard
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                index={index}
              />
            </motion.div>
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
const DataContainer = styled(motion.div)`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15rem 0rem;
  justify-items: center;
`
const Content = styled(PageContainer)``
