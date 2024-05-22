import { mergeProps } from "solid-js";
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

const Gradient = ({ from, to, id }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color={from} />
    <stop offset="100%" stop-color={to} />
  </linearGradient>
);

const SingleLayer = (props) => {
  const { actions } = useDataContext();

  const p = mergeProps({ offset: [0, 0, 0], size: 80, class: "Packed" }, props);
  const w = p.size,
    h = 40 * (p.size / 100),
    t = THICKNESS;
  const gid = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  const fid = `filter-${Math.random().toString(36).substr(2, 9)}`;

  //random between 0.1 and 1
  const animationDelay = () =>
    `${Math.round((Math.random() * 1 + 0.1) * 10) / 10}s`;

  const thisDelay = animationDelay();

  return (
    <g
      class={props.class}
      style={{
        "--offset-x": `${p.offset[0]}px`,
        "--offset-y": `${p.offset[1] - 30}px`,
        "--offset-z": `${p.offset[2]}px`,
        "--middle-x": `${p.middle[0]}px`,
        "--middle-y": `${p.middle[1]}px`,
        "--middle-z": `${p.middle[2]}px`,
        "--size": `${props.size}px`,
        //"animation-delay": thisDelay,
      }}
      onClick={() => actions.setSelectedCard(p.index)}
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
          "font-size": p.fontsize ? p.fontsize + "px" : "7px",
          transform: `skew(-68deg, 22deg) translate(calc(-1px * ${
            p.size / 100
          }), calc(-3px * ${p.size / 100})) scaleY(0.5)`,
          fill: p.textcolor,
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
