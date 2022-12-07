import { data } from "../utils";
import { useState } from "react";
import Question from "./Question";
import Button from "./Button";

export default function Questions() {
  const [questions, setQuestions] = useState(data);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setQuestions(questions.filter((q, id) => id !== index));
    const randomNumber = Math.floor(Math.random() * (questions.length - 1));
    setIndex(randomNumber);
  };

  return (
    <div>
      {questions.length === 0 ? (
        <h1>No more questions!</h1>
      ) : (
        <div>
          <Question question={questions[index].question} />
          <Button title="Next" handleClick={handleNext} />
        </div>
      )}
    </div>
  );
}
