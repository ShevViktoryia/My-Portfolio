import React from "react";
import { S } from "../Header_Styles";

export const Menu: React.FC<{ listItems: Array<string> }> = (props: {
  listItems: Array<string>;
}) => {
  return (
    <S.NavList>
      {props.listItems.map((item, ind) => {
        return (
          <S.NavListItem key={ind}>
            <S.NavLink href={"#" + item}>{item}</S.NavLink>
          </S.NavListItem>
        );
      })}
    </S.NavList>
  );
};
