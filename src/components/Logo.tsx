import styled from "styled-components";
import { Icon } from "./Icon";

type LogoPropsType = {
  iconId: string;
};

export const Logo = (props: LogoPropsType) => {
  return (
    <LogoLink href="/">
      <Icon
        width="60px"
        height="60px"
        viewBox="0 0 120 120"
        iconId={props.iconId}
      />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
