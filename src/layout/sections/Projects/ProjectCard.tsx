import { StyledProjectCard } from "./ProjectCard.styled";
import { CustomPicture } from "../../../components/CustomPicture";
import { ProjectTitle } from "./ProjectTitle.styled";
import { CustomText } from "../../../components/CustomText.styled";
import { ProjectLinks } from "./ProjectLinks";

type ProjectCardPropsType = {
  WebpImg: string;
  CurImg: string;
  ProjectTitle: string;
  CustomText: string;
  deployLink: string;
  codeLink: string;
};

export const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <StyledProjectCard>
      <CustomPicture WebpImg={props.WebpImg} CurImg={props.CurImg} />
      <ProjectTitle>{props.ProjectTitle}</ProjectTitle>
      <CustomText>{props.CustomText}</CustomText>
      <ProjectLinks deployLink={props.deployLink} codeLink={props.codeLink} />
    </StyledProjectCard>
  );
};
