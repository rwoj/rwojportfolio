import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.greyDark};
  color: ${(props) => props.theme.colors.greyLight};
  a {
    color: ${(props) => props.theme.colors.bg};
    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled.div`
  padding: 0.5rem;
  @media (max-width: ${(props) => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: "←";
    padding-right: 8px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;
const Contact = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    padding-left: 8px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();

  // display: "flex",
  // flexDirection: "row",
  return (
    <StyledFooter>
      <Inner>
        {isCase ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '1rem',
            }}
          >
            <StyledLink to="/">Return to home</StyledLink>
            <Contact to="/#contact">Contact Me</Contact>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Copyright &copy; {year} by
            <a href="https://github.com/rwoj">&nbsp;rwoj</a>. My profile on &nbsp;
            <a href="https://www.linkedin.com/in/radek-wojdowski-824699/"> LinkedIn</a>.
          </div>
        )}
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
