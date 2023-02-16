import Link from "next/link"
import { ButtonContainer, AContainer } from "./button.styles"

import { IButtonLinkProps, IButtonProps } from "./button.types"

export const Button: React.FC<IButtonProps> = (props) => {
  return (
    <ButtonContainer
      
  
      {...props}
    >
      {props.children}
    </ButtonContainer>
  )
}

export const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
  return (
    <Link href={props.href || "#"} passHref legacyBehavior>
      <AContainer {...props}>{props.children}</AContainer>
    </Link>
  )
}
