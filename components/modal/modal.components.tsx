import React, { HTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
import { createPortal } from "react-dom"
import { useKeyListener } from "../../hooks/useKeyListener.hook"
import { device } from "../../styles/device"
import { motion, AnimatePresence } from "framer-motion"
type Props = {
  className?: any
  onClose: () => void
} & HTMLAttributes<HTMLElement>

const Modal = ({ className, children, onClose }: Props) => {
  useKeyListener("Escape", onClose)
  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return createPortal(
    <AnimatePresence mode="wait">
      <Background onClick={() => onClose()}>
        <ContentWrapper
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={className}
          onClick={(e: any) => {
            e.stopPropagation()
          }}
        >
          <CloseModalIcon onClick={onClose} />
          {children}
        </ContentWrapper>
      </Background>
    </AnimatePresence>,

    document.body
  )
}

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.75);
`

const ContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 22px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 24px;
  max-width: 650px;
  @media ${device.S} {
    width: 320px;
  }
`

const CloseModalIcon = styled(AiOutlineClose)`
  &:hover {
    cursor: pointer;
  }
  width: 18px;
  height: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--color-primary);
`

export default Modal
