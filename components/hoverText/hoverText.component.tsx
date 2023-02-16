import { IHoverText } from "./hoverText.types";
import styled from "styled-components";
export const HoverText = styled.p<IHoverText>`
    color: ${(props: IHoverText) => props.color};
    font-size: ${(props: IHoverText) => props.fontSize};
    font-weight: ${(props: IHoverText) => props.fontWeight};
`;
