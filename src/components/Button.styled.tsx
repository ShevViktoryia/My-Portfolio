import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  border-radius: 8px;
  background-color: ${theme.colors["second-color"]};
  border: none;
  padding: 16px 66px;
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  width: fit-content;
  transition: 0.5s;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors["second-color"]};
    box-shadow: 0 0 10px ${theme.colors["second-color"]};
    cursor: pointer;
  }

  @media ${theme.media.tablet} {
    margin: 0 auto;
  }
`;
