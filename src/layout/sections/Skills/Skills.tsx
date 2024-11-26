import React from "react";
import { SectionTitle } from "../../../components/SectionTitle.styled";
import SkillCard from "./SkillCard";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <SkillsSection id="Skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillList>
          <FlexWrapper
            align="center"
            justify="space-between"
            wrap="wrap"
            gap="100px"
          >
            <SkillCard cardId="html" />
            <SkillCard cardId="css" />
            <SkillCard cardId="js" />
            <SkillCard cardId="vscode" />
            <SkillCard cardId="ts" />
            <SkillCard cardId="nails" />
            <SkillCard cardId="react" />
            <SkillCard cardId="sass" />
            <SkillCard cardId="bootstrap" />
            <SkillCard cardId="express" />
            <SkillCard cardId="git" />
            <SkillCard cardId="github" />
          </FlexWrapper>
        </SkillList>
      </Container>
    </SkillsSection>
  );
};

const SkillsSection = styled.section``;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;

  @media ${theme.media.tablet} {
    div {
      justify-content: center;
    }
  }
`;
