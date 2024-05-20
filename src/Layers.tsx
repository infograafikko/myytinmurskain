import { mergeProps, createEffect, onCleanup, Show, For } from "solid-js";
import styles from "./Layers.module.css";

const THICKNESS = 5;

const Glow = ({ color, id }) => (
  <filter
    id={id}
    filterUnits="userSpaceOnUse"
    x="-10"
    y="-10"
    width="120"
    height="120"
  >
    <feDropShadow
      dx="0"
      dy="1"
      stdDeviation="2"
      flood-color={color}
      flood-opacity="0.2"
    />
    <feDropShadow
      dx="0"
      dy="-1"
      stdDeviation="2"
      flood-color={color}
      flood-opacity="0.2"
    />
  </filter>
);

const Gradient = ({ from, to, id }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color={from} />
    <stop offset="100%" stop-color={to} />
  </linearGradient>
);

const Layer = (props) => {
  props = mergeProps(
    { offset: [0, 0, 0], selected: false, size: 80, class: "Packed" },
    props
  );
  let layerRef;
  const w = props.size,
    h = 40 * (props.size / 100),
    t = THICKNESS;
  const gid = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  const fid = `filter-${Math.random().toString(36).substr(2, 9)}`;

  //random between 0.1 and 1
  const animationDelay = () =>
    `${Math.round((Math.random() * 1 + 0.1) * 10) / 10}s`;

  const thisDelay = animationDelay();

  createEffect(() => console.log(props.offset));
  createEffect(() => console.log(props.size));

  return (
    <g
      class={props.class}
      style={{
        "--offset-x": `${props.offset[0]}px`,
        "--offset-y": `${props.offset[1] - 30}px`,
        "--offset-z": `${props.offset[2]}px`,
        "--middle-x": `${props.middle[0]}px`,
        "--middle-y": `${props.middle[1]}px`,
        "--middle-z": `${props.middle[2]}px`,
        "--size": `${props.size}px`,
        "animation-delay": thisDelay,
      }}
    >
      <path
        d={`M0,${h / 2 + t} v${-t} L${w / 2},${0} L${w},${h / 2} v${t} L${
          w / 2
        },${h + t} Z`}
        fill={`url(#${gid})`}
        filter={`url(#${fid})`}
      />
      <path d={`M0,${h / 2 + t} v${-t} L${w / 2},${h} v${t} Z`} />
      <path d={`M${w / 2},${h + t} v${-t} L${w},${h / 2} v${t} Z`} />
      <text
        x={w / 2}
        y={h / 2}
        dominant-baseline="middle"
        text-anchor="middle"
        style={{
          "font-size": props.fontsize ? props.fontsize + "px" : "7px",
          transform: `skew(-68deg, 22deg) translate(calc(-1px * ${
            props.size / 100
          }), calc(-3px * ${props.size / 100})) scaleY(0.5)`,
          fill: props.textcolor,
        }}
      >
        {props.text}
      </text>
      <defs>
        <Gradient id={gid} from={props.gradient[0]} to={props.gradient[1]} />
        <Glow id={fid} color={props.gradient[0]} />
      </defs>
    </g>
  );
};

const Layers = ({ children }) => (
  <svg
    class={styles.layers}
    viewBox="0 0 100 90"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>{children}</g>
  </svg>
);

const LayersContainer = (props) => {
  const showLayers = () => props.showLayers;
  createEffect(() => console.log(showLayers()));
  return (
    <Layers>
      <For each={props.cards}>
        {(el, i) => {
          const totalElements = props.cards.length;
          const invertedIndex = totalElements - 1 - i();
          const offset = invertedIndex * 20; // Invert the offset
          const middle = (totalElements / 2) * 10;
          return (
            <Layer
              text={el.title}
              textcolor={el.textcolor}
              gradient={[el.bgcolor, el.bgcolor]}
              offset={[0, offset, 0]}
              middle={[0, middle, 0]}
              class={showLayers() ? styles.Spread : styles.Packed}
              fontsize={el.fontsize}
            />
          );
        }}
      </For>
    </Layers>
  );
};

export default LayersContainer;
