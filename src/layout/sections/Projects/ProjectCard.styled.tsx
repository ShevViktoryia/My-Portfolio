import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const StyledProjectCard = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background: ${theme.colors["card-color"]};
  padding: 30px;
  flex-grow: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
