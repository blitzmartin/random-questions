import { useState } from "react";
import Button from "./Button.jsx";
import Questions from "./Questions";

export default function Home() {
  const [start, setStart] = useState(false);
  const style = {
    height: "97vh",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "0 2rem",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  const toggleStart = () => {
    setStart(!start);
  };
  return (
    <div style={style}>
      {!start && <h1>Random Questions: Biology</h1>}
      {start && <Questions />}
      <Button title={start ? "Reset" : "Start"} handleClick={toggleStart} />
    </div>
  );
}
