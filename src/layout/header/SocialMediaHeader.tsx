import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Icon } from "../../components/Icon";

const links = [
  {
    id: "git-link",
    width: "39",
    height: "38",
    viewBox: "0 0 39 38",
    href: "https://github.com/ShevViktoryia",
  },
  {
    id: "gmail",
    width: "39",
    height: "38",
    viewBox: "0 0 39 38",
    href: "mailto:shevvictoria@gmail.com",
  },
  {
    id: "linkedin",
    width: "39",
    height: "38",
    viewBox: "0 0 39 38",
    href: "https://www.linkedin.com/in/victoria-shevchenko-191577288/",
  },
];

export const SocialMediaHeader = () => {
  return (
    <SocialLinksHeader>
      {links.map((link, ind) => {
        return (
          <SocialLinkHeader href={link.href} key={link.id}>
            <Icon
              iconId={link.id}
              width={link.width}
              height={link.height}
              viewBox={link.viewBox}
            />
          </SocialLinkHeader>
        );
      })}
    </SocialLinksHeader>
  );
};

const SocialLinksHeader = styled.ul`
  padding-left: 0;
  perspective: 60px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const SocialLinkHeader = styled.a`
  margin: 0 20px;
  border-radius: 50%;
  transition: 0.5s;
  & svg {
    display: inline-block;
    transform: translateY(0);
    transition: 0.5s;
  }
  &:hover {
    box-shadow: 0 0 10px ${theme.colors["second-color"]};
  }
  &:hover svg {
    transform: translateY(-8px);
  }
`;
