import styled from "styled-components";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/Theme";
import { MobileHeader } from "./MobileHeader";
import { SocialMedia } from "../sections/Contacts/SocialMedia";

const listItems = ["Home", "Skills", "Works", "Contact"];

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Logo iconId="logo" />
          <StyledNav>
            <NavList>
              {listItems.map((item, ind) => {
                return (
                  <NavListItem key={ind}>
                    <NavLink href={"#" + item}>{item}</NavLink>
                  </NavListItem>
                );
              })}
            </NavList>
          </StyledNav>
          <MobileHeader />
          <SocialMedia />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  width: fit-content;

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${theme.colors["static-white"]};
  text-decoration: none;
  margin-left: 20px;
  transition: 0.8s;

  &:hover {
    color: ${theme.colors["second-color"]};
    text-shadow: 0 0 10px ${theme.colors["second-color"]};
    border-bottom: 3px solid ${theme.colors["second-color"]};
  }
`;

export const NavListItem = styled.li``;
