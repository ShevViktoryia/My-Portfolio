import styled from "styled-components";

type SectionTitlePropsType = {
  align?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: 1.4rem;
    margin-bottom: 50px;
    text-align: ${(props) => props.align || "center"};
}
`;
