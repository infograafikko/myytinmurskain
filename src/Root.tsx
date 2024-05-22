import { ErrorBoundary } from "solid-js";
import App from "./App";
import Fallback from "./Fallback/Fallback";
import { DataProvider } from "./DataContext";

import type { Component } from "solid-js";

const Root: Component = () => {
  return (
    <ErrorBoundary fallback={(error) => <Fallback error={error} />}>
      <DataProvider>
        <App />
      </DataProvider>
    </ErrorBoundary>
  );
};

export default Root;
