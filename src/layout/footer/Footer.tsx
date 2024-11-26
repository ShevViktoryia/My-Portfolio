import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { Contacts } from "../sections/Contacts/Contacts";
import { Form } from "./Form";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper
          direction="column"
          align="center"
          justify="center"
          gap="50px"
        >
          <FlexWrapper wrap="wrap" justify="space-between" gap="30px">
            <Contacts />
            <Form />
          </FlexWrapper>
          <CopyRight>
            © 2024 Viktoria Shevchenko, All Rights Reserved.
          </CopyRight>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 50px 0;
  @media ${theme.media.tablet} {
    div {
      justify-content: center;
    }
  }
`;

const CopyRight = styled.small`
  margin-top: 30px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;
