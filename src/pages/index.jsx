import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
import Footer from "../components/Footer";
import Story from "../components/Story";

const Hero = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${(props) => props.theme.breakpoint.s}) {
    height: 500px;
  }
`;
const HeroLogo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const HeroInner = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${(props) => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const ProjectListing = styled.ul`
  list-style-type: none;
  margin-left: 0;
  margin-top: 4rem;
  li {
    margin-bottom: 1.45rem;
  }
  a {
    font-size: 2.369rem;
    font-style: normal;
    color: ${(props) => props.theme.colors.black};
    @media (max-width: ${(props) => props.theme.breakpoint.s}) {
      font-size: 1.777rem;
    }
  }
`;
const Contact = styled.div`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.colors.text};
  }
  h3 {
    font-family: ${(props) => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: ${(props) => props.theme.maxWidth};
  p: 4;
  mb: [4, 4, 7];
  mx: auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Index = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <Layout>
    <Hero>
      <HeroLogo>rwoj</HeroLogo>
      <HeroInner>
        <h1>
          This is the portfolio of my projects, business activities and
          interests.
        </h1>
        <h3>Enjoy reviewing! </h3>
      </HeroInner>
    </Hero>
    <Wrapper>
      {edges.map((c) => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          image={c.node.data.image.localFile.childImageSharp.fluid}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>
    <Story />
    <Contact>
      <h1>Say hi!</h1>
      <h3>rwoj@poczta.onet.pl</h3>
    </Contact>
    <Footer />
  </Layout>
);

export default Index;

export const indexQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCasestudy(
      sort: { fields: [last_publication_date], order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
