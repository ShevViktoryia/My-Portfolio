import React from "react";
import { Icon } from "../../../components/Icon";
import styled from "styled-components";

type cardPropsType = {
  cardId: string;
};

const SkillCard = (props: cardPropsType) => {
  return (
    <SkillItemList key={props.cardId}>
      <Icon
        width="120"
        height="120"
        viewBox="0 0 120 120"
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
`;
