import React from "react";

const Rating = ({ rating, setRating }) => {
  return (
    <div className="rating__container">
      {[...Array(5)].map((star, index) => (
        <span
          className="cursor-pointer mx-1"
          onClick={() => {
            if (index + 1 === rating) {
              setRating(0);
            } else {
              setRating(index + 1);
            }
          }}
        >
          {index + 1 <= rating ? (
            <i className="fa-solid fa-heart text-[#F26F33] text-[30px]"></i>
          ) : (
            <i className="fa-regular fa-heart text-[30px]"></i>
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
