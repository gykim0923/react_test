import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// const rootElement = document.getElementById("root");
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  element,
  document.getElementById("root")
);
