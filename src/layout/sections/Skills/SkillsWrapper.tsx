import SkillCard from "./SkillCard";
import { theme } from "../../../styles/Theme";
import styled from "styled-components";

const skills = [
  { id: "html" },
  { id: "css" },
  { id: "js" },
  { id: "ts" },
  {
    id: "vscode",
    viewBox: "-45 -50 180 180",
  },
  {
    id: "nails",
    viewBox: "-30 -30 150 150",
  },
  {
    id: "react",
    viewBox: "-50 -50 200 200",
  },
  {
    id: "sass",
    viewBox: "-30 -20 150 150",
  },
  { id: "bootstrap" },
  {
    id: "figma",
    width: "100",
    height: "100",
    viewBox: "-45 -45 180 180",
  },
  {
    id: "git",
    viewBox: "-45 -40 180 180",
  },
  {
    id: "github",
    viewBox: "-50 -40 180 180",
  },
];

export const SkillsWrapper = () => {
  return (
    <SkillList>
      {skills.map((skill, ind) => {
        return (
          <SkillCard
            key={skill.id}
            cardId={skill.id}
            width={skill.width}
            height={skill.height}
            viewBox={skill.viewBox}
          />
        );
      })}
    </SkillList>
  );
};

const SkillList = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-auto-columns: 1fr;
  grid-auto-rows: 200px;
  justify-content: center;

  @media ${theme.media.tablet} {
    max-height: 1140px;
    overflow: hidden;
  }
`;
