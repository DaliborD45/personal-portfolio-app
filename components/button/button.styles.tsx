import { motion } from "framer-motion"
import styled, { css } from "styled-components"

import { IStyledProps } from "./button.types"

const ButtonStyles = css<IStyledProps>`
  cursor: pointer;
  position: relative;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  font-size: 2.4rem;
  outline: none;
  border-radius: 50rem;
  padding: 3rem 3.5rem;
  line-height: 20px;
  color: ${({ color, theme }) => color ?? theme.button.defaultColor};
  transition: all 0.2s ease-in-out;
  margin-top: ${({ top }) => top ?? "initial"};
  margin-bottom: ${({ bottom }) => bottom ?? "initial"};
  margin-right: ${({ right }) => right ?? "initial"};
  margin-left: ${({ left }) => left ?? "initial"};
  width: ${({ width }) => width ?? "initial"};
  &:hover {
    border-radius: 2rem;
    color: ${({ theme }) => theme.button.hoverColor};
  }
`

const disabledStyles = css<IStyledProps>`
  cursor: default;
  opacity: 0.5;
`

const defaultStyles = css<IStyledProps>`
  border: 2px solid ${({ theme }) => theme.button.borderColor};
  color: ${({ color, theme }) => color ?? theme.button.defaultColor};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.button.defaultBackgroundColor};
  &:hover {
    background-color: ${({ theme }) => theme.button.hoverBackgroundColor};
  }
`

export const ButtonContainer = styled(motion.button)<IStyledProps>`
  ${ButtonStyles}

  ${({ variant }) => {
    switch (variant) {
      case "default":
        return defaultStyles
      default:
        return defaultStyles
    }
  }}

	&:disabled {
    ${disabledStyles}
  }
`

export const AContainer = styled(motion.a)<IStyledProps>`
  ${ButtonStyles}
  display:${({ display }) => display ?? "inline-block"};
  text-align: center;
  ${({ variant }) => {
    switch (variant) {
      case "default":
        return defaultStyles
      default:
        return defaultStyles
    }
  }}

  ${({ disabled }) => disabled && disabledStyles};
`
