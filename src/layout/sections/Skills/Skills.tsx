import { SectionTitle } from "../../../components/SectionTitle.styled";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { SkillsWrapper } from "./SkillsWrapper";

export const Skills = () => {
  return (
    <SkillsSection id="Skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsWrapper />
      </Container>
    </SkillsSection>
  );
};

const SkillsSection = styled.section``;
