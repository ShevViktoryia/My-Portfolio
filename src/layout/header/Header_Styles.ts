import { theme } from "../../styles/Theme";
import styled from "styled-components";

const NavListItem = styled.li``;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors["card-color"]};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: fit-content;

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${theme.colors["static-white"]};
  text-decoration: none;
  transition: 0.8s;

  &:hover {
    color: ${theme.colors["second-color"]};
    text-shadow: 0 0 10px ${theme.colors["second-color"]};
    border-bottom: 3px solid ${theme.colors["second-color"]};
  }
`;

export const S = {
  NavListItem,
  HeaderWrapper,
  HeaderContainer,
  StyledNav,
  NavList,
  NavLink,
};
