import NakokulmainApp from "../App.tsx";
import { customElement } from "solid-element";
import defaultProps from "../dev/data/defaultProps.ts";
import { mergeProps } from "solid-js";
const webComponent = customElement(
  "nakokulmain-infograafi",
  { ...defaultProps, iswebcomponent: true },
  (props, { element }) => {
    //noShadowDOM();
    console.log("defaultProps", defaultProps);
    console.log("props", props);
    const newProps = mergeProps(defaultProps, props);
    console.log("newProps", newProps);
    return <NakokulmainApp {...newProps} />;
  }
);

export { webComponent };
