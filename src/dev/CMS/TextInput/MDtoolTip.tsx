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
          <p>[Linkin teksti](http://www.google.fi)</p>
          <p>
            [Linkki avautuu uudella välilehdellä, kun osoitteen perässä kaksi
            tähteä](http://www.google.fi**)
          </p>
          <p>
            Yläviite (esim. <sup>1</sup>) syntyy, kun ympäröit numeron kahdella
            dollarimerkillä <code>$$1$$</code>
          </p>
          <div class={style.tooltip__list}>
            <p>
              <b>Numeroimaton lista:</b>
            </p>
            <p>- Listaelementti 1</p>
            <p>- Listaelementti 2</p>
          </div>
          <div>
            <p>
              <b>Numeroitu lista:</b>
            </p>
            <p>1. Listaelementti 1</p>
            <p>2. Listaelementti 2</p>
          </div>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
};

export default MDtoolTip;
