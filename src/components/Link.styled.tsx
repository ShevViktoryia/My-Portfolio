import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${theme.colors["static-white"]};
  transform: scale(1);
  transition: all 0.5s;

  &:hover {
    color: ${theme.colors["second-color"]};
    transform: scale(1.05);
  }
`;
