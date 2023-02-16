import { motion, useScroll } from "framer-motion"
import styled from "styled-components"
function ScrollComponent() {
  const { scrollYProgress } = useScroll()

  return <Scroller style={{ scaleX: scrollYProgress }} />
}

export default ScrollComponent

const Scroller = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.3rem;
  background: ${({ theme }) => theme.colors.primary};
  transform-origin: 0%;
`
