import { Component, ErrorBoundary, mergeProps, createEffect } from "solid-js";
import { DataProvider } from "./DataContext";
import Nakokulmain from "./Nakokulmain";
import defaultProps from "./dev/data/defaultProps.ts";

interface AppProps {
  [key: string]: any; // Assuming App can accept any props, adjust if needed
}

const App: Component<AppProps> = (props) => {
  const newProps = mergeProps(defaultProps, props);

  return (
    <ErrorBoundary fallback={<div>Virhe tapahtui!</div>}>
      <DataProvider>
        <Nakokulmain {...newProps} />
      </DataProvider>
    </ErrorBoundary>
  );
};

export default App;
