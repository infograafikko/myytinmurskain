import Myytinmurskain from "../../App";
import type { Component } from "solid-js";
import "../../webcomponent/Myytinmurskain-webcomponent";
import defaultProps from "../data/defaultProps.ts";

const Root: Component = () => {
  const props = {
    ...defaultProps,
  };

  return (
    <>
      <Myytinmurskain {...props} />
      <myytin-murskain {...props}></myytin-murskain>
    </>
  );
};

export default Root;
