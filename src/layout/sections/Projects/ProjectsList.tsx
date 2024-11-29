import styled from "styled-components";

import todoAppWebp from "../../../assets/images/todo.webp";
import todoAppImg from "../../../assets/images/todo.png";
import simonWebp from "../../../assets/images/simon.webp";
import simonImg from "../../../assets/images/simon.png";
import bookWebp from "../../../assets/images/bookmarks.webp";
import bookImg from "../../../assets/images/bookmarks.png";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { theme } from "../../../styles/Theme";
import { ProjectCard } from "./ProjectCard";

const cards = [
  {
    img: {
      webp: todoAppWebp,
      png: todoAppImg,
    },
    title: "Todo App",
    text: "Todo App is not just a task management application. It is your reliable assistant in the world of tasks, helping you organize your thoughts and focus on what matters.",
    links: {
      deploy: "https://shevviktoryia.github.io/Todo-app/",
      preview: "https://github.com/ShevViktoryia/Todo-app/tree/todo-app",
    },
  },
  {
    img: {
      webp: simonWebp,
      png: simonImg,
    },
    title: "The Simon Game",
    text: "Step into the world of nostalgia with The Simon Game, a captivating and addictive memory challenge that will put your cognitive skills to the test!",
    links: {
      deploy: "https://shevviktoryia.github.io/The-Simon-Game/",
      preview: "https://github.com/ShevViktoryia/The-Simon-Game",
    },
  },
  {
    img: {
      webp: bookWebp,
      png: bookImg,
    },
    title: "My bookmarks",
    text: "Discover a seamless way to organize and manage your online world with the app. Whether you're a student, a researcher, or a curious soul exploring the web, this app helps you save, categorize, and access your favorite links with just a few taps.",
    links: {
      deploy:
        "https://shevviktoryia.github.io/add-bookmark-app/add-bookmark-app/",
      preview:
        "https://github.com/ShevViktoryia/add-bookmark-app/tree/bookmark-app",
    },
  },
];

export const ProjectsList = () => {
  return (
    <StyledProjectsList>
      <FlexWrapper justify="center" gap="80px" wrap="wrap">
        {cards.map((card, ind) => {
          return (
            <ProjectCard
              key={ind}
              WebpImg={card.img.webp}
              CurImg={card.img.png}
              ProjectTitle={card.title}
              CustomText={card.text}
              deployLink={card.links.deploy}
              codeLink={card.links.preview}
            />
          );
        })}
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
