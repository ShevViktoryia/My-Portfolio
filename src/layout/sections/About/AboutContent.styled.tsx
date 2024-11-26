import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const AboutContent = styled.div`
  width: 40%;
  flex-grow: 2;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`;
