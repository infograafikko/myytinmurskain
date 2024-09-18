import Nakokulmain from "../../App";
import type { Component } from "solid-js";
import "../../webcomponent/Nakokulmain-webcomponent";
import defaultProps from "../data/defaultProps.js";
import defaultPropsUndefined from "../data/defaultPropsUndefined.js";

const Root: Component = () => {
  const props = {
    ...defaultProps,
  };
  console.log(defaultPropsUndefined);

  return (
    <>
      <Nakokulmain {...props} />

      <nakokulmain-infograafi
        {...defaultPropsUndefined}
      ></nakokulmain-infograafi>
    </>
  );
};

export default Root;
