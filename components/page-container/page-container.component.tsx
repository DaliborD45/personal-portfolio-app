import styled from "styled-components"
import { motion } from "framer-motion"
import { IPageContainer } from "./page-container.types"
const PageContainer = styled(motion.div)<IPageContainer>`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 99.5rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "unset"};
  @media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    max-width: 130rem;
  }
`

export default PageContainer
