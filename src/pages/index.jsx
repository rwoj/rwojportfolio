import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
// import website from "../../config/website";
import Layout from "../components/Layout";
// import Listing from "../components/Listing";
import Wrapper from "../components/Wrapper";
// import Title from "../components/Title";
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

// const IndexWrapper = Wrapper.withComponent("main");

class Index extends Component {
  render() {
    // const {
    //   data: { homepage, social, posts, projects },
    // } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroLogo>rwoj</HeroLogo>
          <HeroInner>
            <h1>
              This is the portfolio of my projects, business activities and
              interests.
            </h1>
            <h3>Enjoy reviewing!</h3>
          </HeroInner>
        </Hero>
        {/* <IndexWrapper
          id={website.skipNavId}
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <Title style={{ marginTop: "4rem" }}>Recent posts</Title>
          <Listing posts={posts.nodes} />
          <Title style={{ marginTop: "8rem" }}>Recent projects</Title>
          <ProjectListing>
            {projects.nodes.map((project) => (
              <li key={project.primary.label.text}>
                <a href={project.primary.link.url}>
                  {project.primary.label.text}
                </a>
              </li>
            ))}
          </ProjectListing>
        </IndexWrapper> */}
        <Story />
        <Contact>
          <h1>Say hi!</h1>
          <h3>rwoj@poczta.onet.pl</h3>
        </Contact>
        <Footer />
      </Layout>
    );
  }
}

export default Index;

// export const pageQuery = graphql`
//   query IndexQuery {
//     homepage: prismicHomepage {
//       data {
//         title {
//           text
//         }
//         content {
//           html
//         }
//       }
//     }
//     social: allPrismicHeroLinksBodyLinkItem {
//       nodes {
//         primary {
//           label {
//             text
//           }
//           link {
//             url
//           }
//         }
//       }
//     }
//     posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
//       nodes {
//         uid
//         data {
//           title {
//             text
//           }
//           date(formatString: "DD.MM.YYYY")
//           categories {
//             category {
//               document {
//                 data {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     projects: allPrismicProjectsBodyLinkItem {
//       nodes {
//         primary {
//           label {
//             text
//           }
//           link {
//             url
//           }
//         }
//       }
//     }
//   }
// `;
