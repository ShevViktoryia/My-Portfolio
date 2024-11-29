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
        height={props.height || "200px"}
        srcSet={props.WebpImg}
        type="image/webp"
        style={{ objectFit: "fill" }}
      />
      <img
        width="100%"
        height={props.height || "200px"}
        src={props.CurImg}
        alt="todo"
        style={{ objectFit: "fill" }}
      />
    </picture>
  );
};
