import { mergeProps, createEffect } from "solid-js";
import { useDataContext } from "../DataContext";

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

const Gradient = (props) => {
  const from = () => props.from;
  const to = () => props.to;
  const id = () => props.id;
  return (
    <linearGradient id={id()} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color={from()} />
      <stop offset="100%" stop-color={to()} />
    </linearGradient>
  );
};

const SingleLayer = (props) => {
  const { actions, state } = useDataContext();

  const p = mergeProps({ offset: [0, 0, 0], size: 80 }, props);
  const w = p.size,
    h = 40 * (p.size / 100),
    t = THICKNESS;

  const isWebComponent = () => state.iswebcomponent;

  console.log(state.iswebcomponent);
  const gid = `gradient-${props.index}${isWebComponent() ? "" : "-notWebComponent"}`;
  const fid = `filter-${props.index}${isWebComponent() ? "" : "-notWebComponent"}`;

  const offsetX = () => p.offset[0];
  const offsetY = () => p.offset[1] - 30;
  const offsetZ = () => p.offset[2];

  return (
    <g
      class={props.class}
      style={{
        // "--offset-x": `${offsetX()}px`,
        // "--offset-y": `${offsetY()}px`,
        // "--offset-z": `${offsetZ()}px`,
        // "--middle-x": `${p.middle[0]}px`,
        // "--middle-y": `${p.middle[1]}px`,
        // "--middle-z": `${p.middle[2]}px`,
        cursor: props.showPointer ? "pointer" : "default",
        transform: `translateX(${offsetX()}px) translateY(${offsetY()}px) translateZ(${offsetZ()}px)`,
      }}
      role="button"
      tabIndex={0}
      onClick={() => {
        if (state.tutorialStage >= 3) {
          actions.setSelectedCard(p.index);
        }
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          actions.setSelectedCard(p.index);
        }
      }}
      aria-label={`Valitse kortti ${p.index}`}
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
          "font-size": p.fontsize ? p.fontsize : "7px",
          transform: `skew(-68deg, 22deg) translate(calc(-1px * ${
            p.size / 100
          }), calc(-3px * ${p.size / 100})) scaleY(0.5)`,
          fill: p.textcolor,
          "font-weight": "500",
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

export default SingleLayer;
