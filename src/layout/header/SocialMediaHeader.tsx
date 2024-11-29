import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Icon } from "../../components/Icon";

export const SocialMediaHeader = () => {
  return (
    <SocialLinksHeader>
      <SocialLinkHeader href="https://github.com/ShevViktoryia">
        <Icon iconId="git-link" width="39" height="38" viewBox="0 0 39 38" />
      </SocialLinkHeader>
      <SocialLinkHeader href="mailto:shevvictoria@gmail.com">
        <Icon iconId="gmail" width="39" height="38" viewBox="0 0 39 38" />
      </SocialLinkHeader>
      <SocialLinkHeader href="https://www.linkedin.com/in/victoria-shevchenko-191577288/">
        <Icon iconId="linkedin" width="39" height="38" viewBox="0 0 39 38" />
      </SocialLinkHeader>
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
