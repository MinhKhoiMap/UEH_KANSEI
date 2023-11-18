import { useState } from "react";
import Rating from "../Rating/Rating";

const QuestionGroup = ({ questionID, questionLabel }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="question_group__container" id={questionID}>
      <p>{questionLabel}</p>
      <Rating rating={rating} setRating={setRating} />
    </div>
  );
};

export default QuestionGroup;
