import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import config from "../../config/website";

const Hero = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
`;

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  padding: 20;
  margin: 10;
`;

const TitleWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.bg};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  max-width: ${(props) => props.theme.maxWidthText};
  text-align: center;
  margin: auto;
  padding: 32px;
`;

const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  max-width: ${(props) => props.theme.maxWidthText};
  margin: auto;
  text-align: center;
`;

const Content = styled.main`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 9rem;
  margin-bottom: 9rem;
  p {
    text-align: justify;
  }
  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  blockquote {
    max-width: ${(props) => props.theme.maxWidthText};
    margin-left: auto;
    margin-right: auto;
  }
  li {
    margin-left: 1.45rem;
  }
  .block-img {
    max-width: 100%;
    margin-top: 6rem;
    margin-bottom: 6rem;
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.m}) {
    margin-top: 6rem;
    margin-bottom: 6rem;
    .block-img {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`;

const CaseTemplate = ({ data: { prismicCasestudy: caseNode } }) => {
  const { data, children } = caseNode;
  return (
    <Layout>
      <Helmet>
        <title>{`${data.title.text} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO caseNode={caseNode} casePath={caseNode.uid} caseSEO />
      <Hero>
        <Img fluid={data.image.localFile.childImageSharp.fluid} />
        <TitleWrapper py={4}>
          <Title>{data.title.text}</Title>
        </TitleWrapper>
      </Hero>
      <Wrapper py={4} px={4} mx="auto">
        <SubTitle>{data.subtitle.text}</SubTitle>
        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </Wrapper>
      <Footer isCase />
    </Layout>
  );
};

export default CaseTemplate;

export const pageQuery = graphql`
  query CaseBySlug($uid: String!) {
    prismicCasestudy(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        image {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 1920
                quality: 90
                traceSVG: { color: "#021212" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
              resize(width: 800) {
                src
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
        content {
          html
        }
      }
    }
  }
`;
