import { Container } from "../../../components/Container";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { CustomText } from "../../../components/CustomText.styled";
import { CustomPicture } from "../../../components/CustomPicture";

import photoWeb from "../../../assets/images/photo.webp";
import photoImg from "../../../assets/images/photo.jpg";
import { AboutImg } from "./AboutImg";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button.styled";

export const About = () => {
  return (
    <AboutSection id="Home">
      <Container>
        <StyledAbout>
          <AboutContent>
            <FlexWrapper direction="column" justify="space-evenly" gap="10px">
              <AboutTitle>Hi, I'm Victoria</AboutTitle>
              <AboutSubTitle>Frontend Developer</AboutSubTitle>
              <CustomText>
                Front-End developer with 2+ years of experience based in
                Belarus.
                <br /> I’am coding with a clean and beautiful problem solving in
                mind. I am looking forward to working in teams as well as
                individually.
              </CustomText>
              <Button as="a" href="#Contact">
                Email me
              </Button>
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
  flex-wrap: wrap;
  gap: 90px;
  margin-top: 50px;

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`;

const AboutContent = styled.div`
  width: 50%;
  flex-grow: 2;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`;

const AboutSubTitle = styled.h1`
  color: ${theme.colors["second-color"]};
  margin: 10px 0;
`;

const AboutTitle = styled.h2`
  font-size: 1.5rem;
`;
