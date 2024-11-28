import SkillCard from "./SkillCard";
import { theme } from "../../../styles/Theme";
import styled from "styled-components";

export const SkillsWrapper = () => {
  return (
    <SkillList>
      <SkillCard cardId="html" />
      <SkillCard cardId="css" />
      <SkillCard cardId="js" />
      <SkillCard cardId="ts" />
      <SkillCard cardId="vscode" viewBox="-45 -50 180 180" />
      <SkillCard cardId="nails" viewBox="-30 -30 150 150" />
      <SkillCard cardId="react" viewBox="-50 -50 200 200" />
      <SkillCard cardId="sass" viewBox="-30 -20 150 150" />
      <SkillCard cardId="bootstrap" />
      <SkillCard
        cardId="figma"
        width="100"
        height="100px"
        viewBox="-45 -45 180 180"
      />
      <SkillCard cardId="git" viewBox="-45 -40 180 180" />
      <SkillCard cardId="github" viewBox="-50 -40 180 180" />
    </SkillList>
  );
};

const SkillList = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-rows: 200px;

  @media ${theme.media.tablet} {
    div {
      justify-content: center;
    }
  }
`;
