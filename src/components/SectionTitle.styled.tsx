import styled from "styled-components";

type SectionTitlePropsType = {
  align?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    margin-bottom: 80px;
    text-align: ${(props) => props.align || "center"};
}
`;
