import Nakokulmain from "../../App";
import type { Component } from "solid-js";
import "../../webcomponent/Nakokulmain-webcomponent";
import defaultProps from "../data/defaultProps.ts";

const Root: Component = () => {
  const props = {
    ...defaultProps,
  };

  return (
    <>
      <Nakokulmain {...props} />
      <nakokulmain-infograafi {...props}></nakokulmain-infograafi>
    </>
  );
};

export default Root;
