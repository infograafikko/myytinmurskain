import { type Component } from "solid-js";
import { Tooltip } from "@kobalte/core/tooltip";
import style from "./MDtoolTip.module.css";
const MDtoolTip: Component = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger class={style.tooltip__trigger}>
        [MD-tuki]
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content class={style.tooltip__content}>
          <Tooltip.Arrow />
          <p>
            **<b>Lihavoitu teksti</b>**
          </p>
          <p>
            *<i>Kursivoitu teksti</i>*
          </p>
          <p>[Linkin teksti](linkin osoite)</p>
          <p>
            <code>
              &lt;a href="https://acadsci.fi/" target="_blank"&gt;Avaa linkki
              uudella välilehdellä&lt;/a&gt;
            </code>{" "}
          </p>
          <p>
            Yläviite<sup>1</sup>: <code>Yläviite&lt;sup&gt;1&lt;/sup&gt;</code>
          </p>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
};

export default MDtoolTip;
