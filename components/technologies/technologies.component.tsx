import React from "react"
import { FaReact, FaDocker } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import {
  SiStyledcomponents,
  SiMongodb,
  SiAdobexd,
  SiTypescript,
} from "react-icons/si"
import styled from "styled-components"
import PageContainer from "../page-container/page-container.component"
import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"

function Technologies() {
  const baseVelocity = 100
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -55, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <Wrapper>
      <TechStack>
        <SiTypescript size={80} />
        <FaDocker size={80} />
        <TbBrandNextjs size={80} />
        <FaReact size={80} />
        <SiStyledcomponents size={80} />
        <SiMongodb size={80} />
        <SiAdobexd size={80} />
      </TechStack>
    </Wrapper>
  )
}

export default Technologies
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 25rem;
`
const TechStack = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`
