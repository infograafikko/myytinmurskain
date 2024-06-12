import App from "../App";
import { customElement } from "solid-element";

const webComponent = customElement(
  "myytin-murskain",
  {
    iswebcomponent: true,
    customcss: undefined
  },
  App
);

export { webComponent };
