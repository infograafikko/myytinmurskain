import { type Component, mergeProps } from "solid-js";
import styles from "./Cursor.module.css";

type CursorProps = {
  size: number;
};

const Cursor: Component<CursorProps> = (props) => {
  const p = mergeProps(
    {
      size: 32,
    },
    props
  );
  return (
    <svg
      viewBox="0 0 512 511"
      xmlns="http://www.w3.org/2000/svg"
      id="fi_1633721"
      width={p.size}
      height={p.size}
    >
      <path
        class={styles.importantFill}
        d="M252,492C251.22,492 250.428,491.944 249.632,491.828C243.508,490.908 238.452,486.532 236.672,480.592L140.672,160.592C138.984,154.96 140.524,148.848 144.688,144.684C148.86,140.52 155.008,138.972 160.596,140.668L480.596,236.668C486.532,238.448 490.908,243.504 491.832,249.628C492.748,255.76 490.036,261.872 484.88,265.308L405.124,318.48L487.32,400.684C493.572,406.936 493.572,417.06 487.32,423.308L423.32,487.308C417.068,493.56 406.944,493.56 400.696,487.308L318.492,405.112L265.32,484.868C262.32,489.368 257.296,492 252,492Z"
      />
      <path
        class={styles.importantFill}
        d="M103.312,103.312C109.564,97.06 109.564,86.936 103.312,80.688L71.312,48.688C65.06,42.436 54.936,42.436 48.688,48.688C42.44,54.94 42.436,65.064 48.688,71.312L80.688,103.312C83.812,106.436 87.904,108 92,108C96.096,108 100.188,106.436 103.312,103.312Z"
      />
      <path
        class={styles.importantFill}
        d="M92,156C92,147.164 84.836,140 76,140L28,140C19.164,140 12,147.164 12,156C12,164.836 19.164,172 28,172L76,172C84.836,172 92,164.836 92,156Z"
      />
      <path
        class={styles.importantFill}
        d="M71.312,263.312L103.312,231.312C109.564,225.06 109.564,214.936 103.312,208.688C97.06,202.44 86.936,202.436 80.688,208.688L48.688,240.688C42.436,246.94 42.436,257.064 48.688,263.312C51.812,266.436 55.904,268 60,268C64.096,268 68.188,266.436 71.312,263.312Z"
      />
      <path
        class={styles.importantFill}
        d="M231.312,103.312L263.312,71.312C269.564,65.06 269.564,54.936 263.312,48.688C257.06,42.44 246.936,42.436 240.688,48.688L208.688,80.688C202.436,86.94 202.436,97.064 208.688,103.312C211.812,106.436 215.904,108 220,108C224.096,108 228.188,106.436 231.312,103.312Z"
      />
      <path
        class={styles.importantFill}
        d="M172,76L172,28C172,19.164 164.836,12 156,12C147.164,12 140,19.164 140,28L140,76C140,84.836 147.164,92 156,92C164.836,92 172,84.836 172,76Z"
      />
      <path
        d="M316,364C320.228,364 324.296,365.672 327.312,368.688L412,453.376L453.372,412L368.688,327.312C365.296,323.92 363.608,319.196 364.08,314.42C364.548,309.656 367.136,305.34 371.128,302.684L438.832,257.552L179.872,179.864L257.56,438.824L302.692,371.12C305.348,367.128 309.66,364.54 314.428,364.072C314.952,364.024 315.476,364 316,364Z"
        class="icon"
        fill="white"
      />
    </svg>
  );
};

export default Cursor;
