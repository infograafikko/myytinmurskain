import NakokulmainApp from "../App.tsx";
import { customElement } from "solid-element";
import defaultProps from "../dev/data/defaultProps.ts";
import { mergeProps } from "solid-js";
const webComponent = customElement(
  "nakokulmain-infograafi",
  { ...defaultProps, iswebcomponent: true },
  (props, { element }) => {
    //noShadowDOM();
    const newProps = mergeProps(defaultProps, props);
    return <NakokulmainApp {...newProps} />;
  }
);

export { webComponent };
