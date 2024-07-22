import Myytinmurskain from "./App";
import type { Component } from "solid-js";
import "./webcomponent/Myytinmurskain-webcomponent.tsx";
const Root: Component = () => {
  return (
    <>
      <Myytinmurskain />
      {/* <myytin-murskain></myytin-murskain> */}
    </>
  );
};

export default Root;
