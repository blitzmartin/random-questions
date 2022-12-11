import { useState } from "react";
import SelectLabels from "./SelectLabels";
import Button from "./Button.jsx";
import Questions from "./Questions";

export default function Home() {
  const [start, setStart] = useState(false);
  const [selectData, setSelectData] = useState("")
  const [subject, setSubject] = useState("")

  const handleChange = (event) => {
    setSelectData(event.target.value);
  };

 const toggleStart = () => {
        setSubject(selectData);
        setSelectData("");
        setStart(!start);
    };

  return (
    <div className="home-container">
      {!start &&
        <div>
          <h1>Random Questions</h1>
          <SelectLabels selectData={selectData} handleChange={handleChange} />
        </div>
      }
      {start && <Questions subject={subject} />}
      <Button title={start ? "Reset" : "Start"} handleClick={toggleStart} />
    </div>
  );
}
