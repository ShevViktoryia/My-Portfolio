import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Icon } from "../../../components/Icon";

export const SocialMedia = () => {
  return (
    <SocialLinks>
      <SocialLink href="https://github.com/ShevViktoryia">
        <Icon iconId="git-link" width="39" height="38" viewBox="0 0 39 38" />
      </SocialLink>
      <SocialLink href="mailto:shevvictoria@gmail.com">
        <Icon iconId="gmail" width="39" height="38" viewBox="0 0 39 38" />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/victoria-shevchenko-191577288/">
        <Icon iconId="linkedin" width="39" height="38" viewBox="0 0 39 38" />
      </SocialLink>
    </SocialLinks>
  );
};

const SocialLinks = styled.ul`
  padding-left: 0;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`;

const SocialLink = styled.a`
  margin: 0 20px;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 10px ${theme.colors["second-color"]};
  }
`;