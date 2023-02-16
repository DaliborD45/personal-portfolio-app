import React from "react"
import Flex from "../flex/flex-component"
import styled, { useTheme } from "styled-components"
import Heading from "../heading/heading.components"
import Text from "../text/text.components"
function AdvantageCard({ Icon, title, description,index}: AdvantageCardProps) {
  const theme = useTheme()
  return (
    <Card
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon style={{ color: theme.colors.blue,marginBottom:'2rem' }} size={index === 3 ? "8rem" : "5rem"}
      />
      <Heading normalWeight variant="h4" color="black" style={{marginBottom:"2rem"}}>
        {title}
      </Heading>
      <Text color={theme.colors.metalGrey} align="center">
        {description}
      </Text>
    </Card>
  )
}

export default AdvantageCard
const Card = styled(Flex)`
  max-width: 40rem;
`
