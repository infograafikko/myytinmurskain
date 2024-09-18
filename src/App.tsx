import { Component, ErrorBoundary, mergeProps, createEffect } from "solid-js";
import { DataProvider } from "./DataContext";
import Nakokulmain from "./Nakokulmain";
import defaultPropsUndefined from "./dev/data/defaultPropsUndefined.js";
import ErrorBoundaryComponent from "./ErrorBoundary";
interface AppProps {
  [key: string]: any; // Assuming App can accept any props, adjust if needed
}

const App: Component<AppProps> = (props) => {
  console.log("input props", props);
  const newProps = mergeProps(defaultPropsUndefined, props);

  return (
    <DataProvider>
      <ErrorBoundary fallback={<ErrorBoundaryComponent />}>
        <Nakokulmain {...newProps} />
      </ErrorBoundary>
    </DataProvider>
  );
};

export default App;
