import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const AboutImg = styled.div`
  max-width: 35%;
  height: auto;
  border-radius: 50%;
  transition: 0.5s;
  border: 7px solid ${theme.colors["second-color"]};
  padding: 10px;

  img {
    border-radius: 50%;
  }

  @media ${theme.media.tablet} {
    max-width: 60%;
  }
`;
