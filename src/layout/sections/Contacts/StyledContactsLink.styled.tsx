import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const StyledContactsLink = styled.a`
  font-weight: 700;
  width: 100%;
  margin-top: -20px;
  display: block;
  font-size: 23px;
  line-height: 1.2069;
  letter-spacing: -0.02em;
  text-align: center;
  background: ${theme.colors["second-color"]};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
