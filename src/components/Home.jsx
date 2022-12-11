import { useState } from "react";
import SelectLabels from "./SelectLabels";
import Button from "./Button.jsx";
import Questions from "./Questions";
import CustomRound from "./CustomRound";

export default function Home() {
  const [start, setStart] = useState(false);
  const [selectData, setSelectData] = useState("")
  const [subject, setSubject] = useState("")

  const [input, setInput] = useState("")
  const [custom, setCustom] = useState([
    {
      id: 0,
      question: "Click next to skip question and reset to start again"
    }
  ]);
  const [nextId, setNextId] = useState(1)

  const handleChange = (event) => {
    setSelectData(event.target.value);
  };

  const toggleStart = () => {
    if (!start && selectData === "") {
      alert('Please select one subject')
    } else {
      setSubject(selectData);
      setSelectData("");
      setStart(!start);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('yeah!')
    setCustom([
      ...custom,
      {
        id: nextId,
        question: input
      }
    ])
    console.log(custom)
    setInput("")
    setNextId(nextId + 1)
  }

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
      <CustomRound input={input} setInput={setInput} handleSubmit={handleSubmit} />
    </div>
  );
}
