type picturePropsType = {
  WebpImg: string;
  CurImg: string;
  height?: string;
};

export const CustomPicture = (props: picturePropsType) => {
  return (
    <picture>
      <source
        width="100%"
        height={props.height || "260px"}
        srcSet={props.WebpImg}
        type="image/webp"
        style={{ objectFit: "cover" }}
      />
      <img
        width="100%"
        height={props.height || "260px"}
        src={props.CurImg}
        alt="todo"
        style={{ objectFit: "cover" }}
      />
    </picture>
  );
};
