import sprite from "../assets/images/sprite.svg";

type iconPropsType = {
  iconId: string;
  width: string;
  height: string;
  viewBox: string;
};

export const Icon = (props: iconPropsType) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </svg>
  );
};
