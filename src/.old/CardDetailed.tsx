import { type Component } from "solid-js";

const CardDetailed: Component = (props) => {
  const shouldShow = () => props.shouldShow;
  return (
    <div
      style={{
        display: shouldShow() ? "block" : "none",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
        volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante
        dui, porta eu felis nec, scelerisque pharetra turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
        volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante
        dui, porta eu felis nec, scelerisque pharetra turpis.
      </p>
      <h4>Skenaarion tukee</h4>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vivamus interdum hendrerit ex vitae sodales.</li>
      </ul>
      <h4>Skenaarion uhkaa</h4>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vivamus interdum hendrerit ex vitae sodales.</li>
      </ul>
    </div>
  );
};

export default CardDetailed;
