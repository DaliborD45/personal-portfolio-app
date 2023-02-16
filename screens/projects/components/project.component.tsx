import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
interface ProjectProps {
  type: string;
  title: string;
  setBgColor: Dispatch<SetStateAction<string>>;
  hoverColor: string;
  imageColor: string;
  imageLink: string;
}

function Project({
  type,
  title,
  setBgColor,
  hoverColor,
  imageColor,
  imageLink,
}: ProjectProps) {
  return (
    <Wrapper
      onMouseEnter={() => setBgColor(hoverColor)}
      onMouseLeave={() => setBgColor("white")}
    >
      <ImageFigure imageBgColor={imageColor} whileHover={{ scale: 1.05 }}>
        <Image src={imageLink} width={500} height={300} alt={`${imageLink}}`} />
      </ImageFigure>
      <Info>
        <ProjectName>{title}</ProjectName>
        <ProjectType>{type}</ProjectType>
      </Info>
    </Wrapper>
  );
}

export default Project;
const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
`;
const Info = styled.div`
  z-index: 100;
  display: flex;
  height: 100%;
  margin: auto 0;
  margin-left: -7rem;
  flex-direction: column;
`;
interface ImageFigure {
  imageBgColor: string;
}
const ImageFigure = styled(motion.figure)<ImageFigure>`
  background-color: ${({ imageBgColor }) => imageBgColor};
  width: 60rem;
  height: 36rem;
`;
const ProjectName = styled.h1`
  font-size: 12rem;
  color: #e8293b;

  font-weight: 800;
`;
const ProjectType = styled.h2`
  color: black;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
`;
