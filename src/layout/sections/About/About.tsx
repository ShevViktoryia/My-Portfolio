import { Container } from "../../../components/Container";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { AboutContent } from "./AboutContent.styled";
import { AboutTitle } from "./AboutTitle.styled";
import { AboutSubTitle } from "./AboutSubTitle.styled";
import { CustomText } from "../../../components/CustomText.styled";
import { CustomPicture } from "../../../components/CustomPicture";

import photoWeb from "../../../assets/images/photo.webp";
import photoImg from "../../../assets/images/photo.jpg";
import { AboutImg } from "./AboutImg";
import { theme } from "../../../styles/Theme";

export const About = () => {
  return (
    <AboutSection id="Home">
      <Container>
        <StyledAbout>
          <AboutContent>
            <FlexWrapper direction="column" justify="space-evenly">
              <AboutTitle>Hi, I'm Victoria</AboutTitle>
              <AboutSubTitle>Junior Frontend Developer</AboutSubTitle>
              <CustomText>
                Front-End developer based in Belarus <br /> I’am coding with a
                clean and beautiful problem solving in mind.
              </CustomText>
            </FlexWrapper>
          </AboutContent>
          <AboutImg>
            <CustomPicture WebpImg={photoWeb} CurImg={photoImg} height="auto" />
          </AboutImg>
        </StyledAbout>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section``;

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px auto 50px;
  flex-wrap: wrap;
  gap: 90px;

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`;
