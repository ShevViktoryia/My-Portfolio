import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { useState } from "react";

const listItems = ["Home", "Skills", "Works", "Contact"];

export const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <StyledMobileNav>
      <BurgerBtn onClick={handleClick} isOpen={isOpen}>
        <span></span>
      </BurgerBtn>
      <NavListMobile isOpen={isOpen}>
        {listItems.map((item, ind) => {
          return (
            <NavListItem onClick={handleClick} key={ind}>
              <NavLink href={"#" + item}>{item}</NavLink>
            </NavListItem>
          );
        })}
      </NavListMobile>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.nav``;

const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 10px;
  padding: 5px;
  gap: 10px;
  display: none;
  z-index: 9999;

  @media ${theme.media.mobile} {
    display: block;
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${theme.colors["static-white"]};
    transform: translateY(5px);
    transition: 0.5s;
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(-45deg);
      `}
  }

  &::before {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${theme.colors["static-white"]};
    transition: 0.5s;
    transform: rotate(0deg) translateY(-5px);
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(45deg) translate(1px);
      `}
  }
`;

const NavListMobile = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding-left: 0;
  backdrop-filter: blur(10px) brightness(0.4);

  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
      backgroung-color: ${theme.colors.primary};
    `}
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
