import { useState } from "react";
import Button from "./Button.jsx";
import Questions from "./Questions";

export default function Home() {
  const [start, setStart] = useState(false);

  const toggleStart = () => {
    setStart(!start);
  };
  return (
    <div className="home-container">
      {!start && <h1>Random Questions: Biology</h1>}
      {start && <Questions />}
      <Button title={start ? "Reset" : "Start"} handleClick={toggleStart} />
    </div>
  );
}
