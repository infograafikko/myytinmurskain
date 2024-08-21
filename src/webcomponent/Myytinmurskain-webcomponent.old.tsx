import MyytinmurskainApp from "../App";
import { customElement, noShadowDOM } from "solid-element";
import defaultProps from "../dev/data/defaultProps.ts";
import { mergeProps } from "solid-js";
const webComponent = customElement(
  "myytin-murskain",
  defaultProps,
  (props, { element }) => {
    noShadowDOM();
    console.log("props", props);
    console.log("default", defaultProps);
    const newProps = mergeProps(defaultProps, props);
    console.log("merged", newProps);
    return <MyytinmurskainApp {...newProps} />;
  }
);

export { webComponent };
