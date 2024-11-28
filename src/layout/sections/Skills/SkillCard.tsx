import React from "react";
import { Icon } from "../../../components/Icon";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type cardPropsType = {
  cardId: string;
  viewBox?: string;
  width?: string;
  height?: string;
};

const SkillCard = (props: cardPropsType) => {
  return (
    <SkillItemList key={props.cardId}>
      <Icon
        width="100"
        height="100"
        viewBox={props.viewBox || "0 0 100 100"}
        iconId={props.cardId}
      />
    </SkillItemList>
  );
};

export default SkillCard;

const SkillItemList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors["card-color"]};
  border-radius: 20px;
`;
