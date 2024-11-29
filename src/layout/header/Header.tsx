import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { MobileHeader } from "./MobileHeader";
import { SocialMediaHeader } from "./SocialMediaHeader";
import { S } from "./Header_Styles";
import { Menu } from "./menu/Menu";

const listItems = ["Home", "Skills", "Works", "Contact"];

export const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContainer>
          <Logo iconId="logo" />
          <S.StyledNav>
            <Menu listItems={listItems} />
          </S.StyledNav>
          <MobileHeader />
          <SocialMediaHeader />
        </S.HeaderContainer>
      </Container>
    </S.HeaderWrapper>
  );
};
