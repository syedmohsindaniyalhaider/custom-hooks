import "./App.css";
import useCounter from "./Components/useCounter";

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
      <div
        style={{
          margin: "20px 50%",
        }}
      >
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
      </div>
    </>
  );
}

export default App;
