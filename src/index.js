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

//jsx예시2
// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: "Harper",
//   lastName: "Perez"
// };

// const element = <h1>Hello, {formatName(user)}!</h1>;

// ReactDOM.render(
// element, document.getElementById("root")
// );

//시계의 예
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

//렌더링 예
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;//welcome 불러서 name에 사라 넣기 , 이부분 함수도 가능
// ReactDOM.render(
//   element,//element렌더링 해서
//   document.getElementById('root')
// );

//Comment예제
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);
