import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(99.9% * 1 / 2 - 4rem);
  max-width: calc(99.9% * 1 / 2 - 4rem);
  width: calc(99.9% * 1 / 2 - 4rem);
  text-align: center;
  position: relative;
  @media (max-width: ${(props) => props.theme.breakpoint.m}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-top: 3rem !important;
  }
`;

const ItemTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: translateY(0rem);
`;

const ItemSubtitle = styled.p`
  color: ${(props) => props.theme.colors.greyMedium};
`;

const Overlay = styled.div`
display: flex;
justify-content:center;
align-items;center;
flex-direction:column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.primary};
  z-index: 10;
  opacity: 0;
  transition: opacity 300ms ease-out;
  span {
    z-index: 20;
    color: ${(props) => props.theme.colors.bg};
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity 300ms ease-out;
    &:first-child {
      transition: transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
      transform: translateY(2rem);
    }
    &:last-child {
      font-size: 3.5rem;
      line-height: 3rem;
      transition: transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
      transform: translateY(4rem);
      font-family: ${(props) => props.theme.fontFamily.heading};
    }
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
  &:hover {
    transform: scale(0.95);
    ${Overlay} {
      opacity: 1;
      span {
        opacity: 1;
        &:first-child {
          transform: translateY(0);
        }
        &:last-child {
          transform: translateY(0);
        }
      }
    }
  }
  &:hover + ${ItemTitle} {
    transform: translateY(-1rem);
    color: ${(props) => props.theme.colors.primary};
  }
`;

const GridItem = ({ uid, image, alt, title, subtitle }) => (
  <Item key={uid} style={{ marginTop: `${randomNumber(4, 8) * 2}rem` }}>
    <StyledLink to={uid}>
      <Overlay>
        <span>view</span>
        <span>case description</span>
      </Overlay>
      <Img fluid={image} alt={alt} />
    </StyledLink>
    <ItemTitle>{title}</ItemTitle>
    <ItemSubtitle>{subtitle}</ItemSubtitle>
  </Item>
);

export default GridItem;
