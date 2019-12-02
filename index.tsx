import * as React from "react";
import { render } from "react-dom";
import { Map } from "./src/components/Map";

const App: React.SFC = () => {
  return <Map />;
};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
