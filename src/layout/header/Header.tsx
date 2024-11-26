import styled from "styled-components";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { theme } from "../../styles/Theme";
import { MobileHeader } from "./MobileHeader";

const listItems = ["Home", "Skills", "Works", "Contact"];

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <FlexWrapper justify="space-between" align="center">
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
        </FlexWrapper>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  background-color: ${theme.colors.primary};
  box-shadow: 0 0 7px 6px rgba(0, 0, 0, 0.5);
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;
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
