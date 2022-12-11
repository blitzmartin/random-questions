import { biology, chemistry, maths } from "../utils";
import { useState, useEffect } from "react";
import Question from "./Question";
import Button from "./Button";

export default function Questions({ subject }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setQuestions(questions.filter((q, id) => id !== index));
    const randomNumber = Math.floor(Math.random() * (questions.length - 1));
    setIndex(randomNumber);
  };

  useEffect(() => {
    if(subject === "biology") {
      setQuestions(biology)
    } else if (subject === "chemistry") {
      setQuestions(chemistry)
    } else if (subject === "maths") {
      setQuestions(maths)
    }

  }, [])

  return (
    <div>
      {questions.length === 0 ? (
        <h1>No questions!</h1>
      ) : (
        <div>
          <Question question={questions[index].question} />
          <Button title="Next" handleClick={handleNext} />
        </div>
      )}
    </div>
  );
}
