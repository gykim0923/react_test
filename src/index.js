import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./App";

// // const rootElement = document.getElementById("root");
// const name = "Josh Perez";
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
//   element,
//   document.getElementById("root")
// );import { StrictMode } from "react";
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));
