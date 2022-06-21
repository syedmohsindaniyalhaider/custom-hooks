import { useState, useEffect } from "react";
import "./App.css";
import useCounter from "./Components/useCounter";
import useFetch from "./Components/useFetch";

const FetchApi = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  const activites = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(activites);
  console.log(data);
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item?.id}>{item?.title}</p>;
        })}
    </>
  );
};

const ForwardCounter = () => {
  const counter = useCounter();

  return <>{counter}</>;
};
const BackwardCounter = () => {
  const counter = useCounter(false);
  return <>{counter}</>;
};

function App() {
  return (
    <>
      <div>
        <div
          style={{
            padding: " 20px",
            backgroundColor: "brown",
            width: "30px",
            color: "white",
            color: "white",
          }}
        >
          <ForwardCounter />
        </div>
        <div
          style={{
            color: "white",
            padding: " 20px",
            backgroundColor: "brown",
            width: "30px",
          }}
        >
          <BackwardCounter />
        </div>
        <div
          style={{
            padding: " 20px",
          }}
        >
          <FetchApi />
        </div>
      </div>
    </>
  );
}

export default App;
