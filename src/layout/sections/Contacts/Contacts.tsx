import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { theme } from "../../../styles/Theme";
import { SocialMedia } from "./SocialMedia";

export const Contacts = () => {
  return (
    <ContactsSection id="Contact">
      <FlexWrapper direction="column" gap="20px">
        <ContactsTitle>
          Let’s <br /> Connect
        </ContactsTitle>
        <SocialMedia />
      </FlexWrapper>
    </ContactsSection>
  );
};

const ContactsSection = styled.div`
  min-width: 50%;
`;
const ContactsTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 20px;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`;
