import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { theme } from "../../styles/Theme";
import { Button } from "../../components/Button.styled";
import { SectionTitle } from "../../components/SectionTitle.styled";

export const Form = () => {
  return (
    <StyledForm>
      <SectionTitle align="left">
        Contact me, let’s make magic together
      </SectionTitle>
      <FlexWrapper direction="column" gap="16px">
        <Field placeholder="name: " />
        <Field placeholder="email: " />
        <Field placeholder="message: " as="textarea" />
        <Button type="submit">Send</Button>
      </FlexWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  flex-grow: 1;

  h2 {
    @media ${theme.media.tablet} {
      text-align: center;
    }
  }
`;

const Field = styled.input`
  border-radius: 8px;
  background: ${theme.colors["card-color"]};
  opacity: 0.8;
  border: none;
  font-weight: 500;
  padding: 19px 16px;
  font-size: 1.2rem;
  color: ${theme.colors["static-white"]};

  &::placeholder {
    color: ${theme.colors["paragraf-color"]};
  }

  &:focus: {
    outline: 2px solid ${theme.colors["second-color"]};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors["second-color"]};
  }
`;
