import NakokulmainApp from "../App.tsx";
import { customElement } from "solid-element";
import defaultProps from "../dev/data/defaultProps.js";
import defaultPropsUndefined from "../dev/data/defaultPropsUndefined.js";
import { mergeProps } from "solid-js";
const webComponent = customElement(
  "nakokulmain-infograafi",
  { ...defaultPropsUndefined, iswebcomponent: true },
  (props, { element }) => {
    //noShadowDOM();
    const newProps = mergeProps(defaultPropsUndefined, props);
    return <NakokulmainApp {...newProps} />;
  }
);

export { webComponent };
