import Nakokulmain from "./App";
import type { Component } from "solid-js";
import "./webcomponent/Nakokulmain-webcomponent";
const Root: Component = () => {
  return (
    <>
      <Nakokulmain />
      <myytin-murskain></myytin-murskain>
    </>
  );
};

export default Root;
