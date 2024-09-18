import { type Component } from "solid-js";
import { useDataContext } from "./DataContext";

const ErrorBoundaryComponent: Component = () => {
  const { state, actions } = useDataContext();
  //list all object keys where value is undefined
  const undefinedKeys = Object.keys(state.texts ?? {}).filter(
    (key) => state.texts?.[key as keyof typeof state.texts] === undefined
  );
  console.log(undefinedKeys);

  return (
    <div>
      <h3>Ei voitu lukea seuraavia tekstejä</h3>
      <ul>
        <For each={undefinedKeys}>
          {(el, i) => (
            <li>
              <p>{el}</p>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default ErrorBoundaryComponent;
