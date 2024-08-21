export const inShadowRoot = async (e) => {
  const parent = await new Promise((resolve) =>
    setTimeout(() => resolve(e.parentNode), 0)
  );
  return parent instanceof ShadowRoot;
};

const StylesForWebcomponent = (props) => {
  const tag = props?.tag || undefined;
  // const unset = () =>
  //   tag === "Header" || tag === "Scrolly" || tag === "Carousel"
  //     ? `figure { margin: 0; }`
  //     : undefined;

  return (
    <style>
      {/* {unset()} */}
      {props.css.default} {props?.customCss}
    </style>
  );
};

export default StylesForWebcomponent;
