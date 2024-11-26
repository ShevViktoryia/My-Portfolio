import { Link } from "../../../components/Link.styled";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";

type ProjectLinksPropsType = {
  deployLink: string;
  codeLink: string;
};

export const ProjectLinks = (props: ProjectLinksPropsType) => {
  return (
    <FlexWrapper align="center" justify="space-between">
      <Link target="_blank" href={props.deployLink}>
        Live Preview
      </Link>
      <Link target="_blank" href={props.codeLink}>
        View Code
      </Link>
    </FlexWrapper>
  );
};
