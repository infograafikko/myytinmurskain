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
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 464 464"
      xml:space="preserve"
      style={{ width: `${p.size}px`, height: `${p.size}px` }}
    >
      <g>
        <g>
          <path
            fill="var(--dark-gray-color)"
            d="M416.483,265.441c-2.704-2.777-6.419-4.336-10.295-4.321h-75.52c-5.891,0-10.667-4.776-10.667-10.667V14.293
			C320.001,6.399,313.602,0,305.708,0H158.721c-7.894,0-14.293,6.399-14.293,14.293v236.16c0,5.891-4.776,10.667-10.667,10.667
			H58.028c-7.893-0.149-14.412,6.128-14.561,14.02c-0.075,3.951,1.49,7.757,4.321,10.513l174.08,174.08
			c2.648,2.69,6.252,4.224,10.027,4.267c3.849,0.014,7.54-1.524,10.24-4.267l174.08-174.08
			C421.87,280.146,421.99,271.097,416.483,265.441z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ArrowDown;
