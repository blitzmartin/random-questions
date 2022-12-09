import { biology } from "../utils";
import { useState } from "react";
import SelectLabels from "./SelectLabels";
import Button from "./Button.jsx";
import Questions from "./Questions";

export default function Home() {
  const [start, setStart] = useState(false);
  const [subject, setSubject] = useState(biology)

  const toggleStart = () => {
    setStart(!start);
  };
  return (
    <div className="home-container">
      {!start && <h1>Random Questions</h1>}
      <SelectLabels />
      {start && <Questions subject={subject} />}
      <Button title={start ? "Reset" : "Start"} handleClick={toggleStart} />
    </div>
  );
}
