import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const AboutImg = styled.div`
  max-width: 35%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px ${theme.colors["second-color"]};
  overflow: hidden;
  transition: 0.5s;
  flex-grow: 1;
  @media ${theme.media.tablet} {
    max-width: 60%;
  }
`;
