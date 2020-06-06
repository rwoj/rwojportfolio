import React from "react";
import styled from "@emotion/styled";

import DataReport from "../images/data_report.svg";
import LaunchDay from "../images/undraw_launch_day_4e04.svg";

const PrimaryBG = styled.section`
  background: ${(props) => props.theme.colors.primaryDark};
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme.colors.textInvert};
  }
  p: 4;
  mx: auto;
`;
const StoryItem = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  w: 1;
  py: 5;
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  margin: calc(2%);
  @media (max-width: ${(props) => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: "－";
    padding-right: 8px;
  }
  margin: 10;
`;

const Story = () => (
  <PrimaryBG>
    <StoryItem>
      <ServiceImage>
        <img src={LaunchDay} alt="Launch to Space" />
      </ServiceImage>
      <ServiceText>
        <h2>Looking towards the future</h2>
        <p>
          I think technology enables great things. In particular I belive in:
        </p>
        <ul>
          <li>Blockchain</li>
          <li>IoT, Data technologies</li>
          <li>
            ... and programming, as a key skill and langauage of the future
            world
          </li>
        </ul>
      </ServiceText>
    </StoryItem>
    <StoryItem style={{ flexDirection: "row-reverse" }}>
      <ServiceImage>
        <img src={DataReport} alt="Data Report" />
      </ServiceImage>
      <ServiceText>
        <h2>And now</h2>
        <p>
          Well, let's focus on what business needs. To grow the business you
          need more then technology. So, my focus is:
        </p>
        <ul>
          <li>to know how to deliver (I am PMP, ScrumMaster, Leader)</li>
          <li>to know what to deliver (I am business oriented)</li>
          <li>
            to understand why it make sense to deliver it (years of experience)
          </li>
        </ul>
      </ServiceText>
    </StoryItem>
  </PrimaryBG>
);

export default Story;
