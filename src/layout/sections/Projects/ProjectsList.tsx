import styled from "styled-components";
import { StyledProjectCard } from "./ProjectCard.styled";
import { CustomPicture } from "../../../components/CustomPicture";
import { ProjectTitle } from "./ProjectTitle.styled";
import { CustomText } from "../../../components/CustomText.styled";
import { ProjectLinks } from "./ProjectLinks";

import todoAppWebp from "../../../assets/images/todo.webp";
import todoAppImg from "../../../assets/images/todo.png";
import simonWebp from "../../../assets/images/simon.webp";
import simonImg from "../../../assets/images/simon.png";
import bookWebp from "../../../assets/images/bookmarks.webp";
import bookImg from "../../../assets/images/bookmarks.png";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { theme } from "../../../styles/Theme";

export const ProjectsList = () => {
  return (
    <StyledProjectsList>
      <FlexWrapper justify="center" gap="80px" wrap="wrap">
        <StyledProjectCard>
          <CustomPicture WebpImg={todoAppWebp} CurImg={todoAppImg} />
          <ProjectTitle>Todo App</ProjectTitle>
          <CustomText>
            Todo App is not just a task management application. It is your
            reliable assistant in the world of tasks, helping you organize your
            thoughts and focus on what matters.
          </CustomText>
          <ProjectLinks
            deployLink="https://shevviktoryia.github.io/Todo-app/"
            codeLink="https://github.com/ShevViktoryia/Todo-app/tree/todo-app"
          />
        </StyledProjectCard>
        <StyledProjectCard>
          <CustomPicture WebpImg={simonWebp} CurImg={simonImg} />
          <ProjectTitle>The Simon Game</ProjectTitle>
          <CustomText>
            Step into the world of nostalgia with The Simon Game, a captivating
            and addictive memory challenge that will put your cognitive skills
            to the test!
          </CustomText>
          <ProjectLinks
            deployLink="https://shevviktoryia.github.io/The-Simon-Game/"
            codeLink="https://github.com/ShevViktoryia/The-Simon-Game"
          />
        </StyledProjectCard>
        <StyledProjectCard>
          <CustomPicture WebpImg={bookWebp} CurImg={bookImg} />
          <ProjectTitle>My bookmarks</ProjectTitle>
          <CustomText>
            Discover a seamless way to organize and manage your online world
            with the app. Whether you're a student, a researcher, or a curious
            soul exploring the web, this app helps you save, categorize, and
            access your favorite links with just a few taps.
          </CustomText>
          <ProjectLinks
            deployLink="https://shevviktoryia.github.io/add-bookmark-app/add-bookmark-app/"
            codeLink="https://github.com/ShevViktoryia/add-bookmark-app/tree/bookmark-app"
          />
        </StyledProjectCard>
      </FlexWrapper>
    </StyledProjectsList>
  );
};

const StyledProjectsList = styled.div`
  @media ${theme.media.tablet} {
    & > div {
      justify-content: center;
    }
  }
`;
