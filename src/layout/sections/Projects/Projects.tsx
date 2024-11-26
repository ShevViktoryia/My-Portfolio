import { Container } from "../../../components/Container";
import { ProjectsList } from "./ProjectsList";
import { SectionTitle } from "../../../components/SectionTitle.styled";
import styled from "styled-components";

export const Projects = () => {
  return (
    <ProjectsSection id="Works">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsList />
      </Container>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section``;
