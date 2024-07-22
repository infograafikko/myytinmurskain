import { type Component, mergeProps } from "solid-js";

type ArrowDownProps = {
  size: number;
};

const ArrowDown: Component<ArrowDownProps> = (props) => {
  const p = mergeProps(
    {
      size: 32,
    },
    props
  );
  return (
    <svg
      height="512pt"
      viewBox="0 0 512 511"
      width="512pt"
      xmlns="http://www.w3.org/2000/svg"
      id="fi_1633721"
      style={{ width: `${p.size}px`, height: `${p.size}px` }}
    >
      <path d="m512 70.832031-70.332031-70.332031-185.667969 185.667969-185.667969-185.667969-70.332031 70.332031 256 256zm0 0"></path>
    </svg>
  );
};

export default ArrowDown;
