import React, { HTMLAttributes } from "react"
import styled from "styled-components"

type Props = {
  className?: string
  weight?: Weight
  color?: string
  size?: Size
  align?: Align
  uppercase?: boolean
  withAccentUnderline?: boolean
  lineHeight?: number
} & HTMLAttributes<HTMLElement>

type Weight = "normal" | "bold"
type Size = "default" | "small" | "very-small" | "large"
type Align = "left" | "center" | "right"

const Text = ({
  children,
  className,
  weight,
  color,
  size,
  align,
  uppercase,
  withAccentUnderline,
  lineHeight,
  ...props
}: Props) => {
  return (
    <StyledText
      className={className}
      weight={weight || "normal"}
      color={color || "secondary"}
      size={size || "default"}
      align={align || "left"}
      uppercase={uppercase}
      withAccentUnderline={withAccentUnderline}
      {...props}
    >
      {children}
    </StyledText>
  )
}

export const StyledText = styled.span<{
  weight: Weight
  color: string
  size: Size
  align: Align
  uppercase?: boolean
  withAccentUnderline?: boolean
  lineHeight?: number
}>`
  display: block;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.5)};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-size: ${(props) => {
    if (props.size === "very-small") {
      return "12px"
    } else if (props.size === "small") {
      return "14px"
    } else if (props.size === "default") {
      return "16px"
    } else {
      return "18px"
    }
  }};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : undefined)};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => {
    return props.align
  }};
  border-bottom: ${(props) =>
    props.withAccentUnderline ? `2px solid var(--color-accent)` : "unset"};
`

export default Text
