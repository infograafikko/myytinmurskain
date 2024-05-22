import { type Component, mergeProps } from "solid-js";

type FallbackProps = {
  text?: string;
  error?: Error;
};

const Fallback: Component<FallbackProps> = (props) => {
  const p = mergeProps(
    { text: "Pahoittelut, toteutusta ei voida näyttää." },
    props
  );

  return (
    <div>
      <p>{p.text}</p>
    </div>
  );
};

export default Fallback;
