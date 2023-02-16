// Utils
import { HTMLMotionProps } from "framer-motion"

export interface IStyledProps {
  top?: string
  left?: string
  right?: string
  bottom?: string
  width?: string
  variant?:
    | "default"
    | "outline"
    | "solid"
    | "solid-default"
    | "solid-artist"
    | "solid-promoter"
  backgroundColor?: string
  color?: string
  disabled?: boolean
  display?: string
}

export interface IButtonProps extends HTMLMotionProps<"button">, IStyledProps {}

export interface IButtonLinkProps extends HTMLMotionProps<"a">, IStyledProps {}
