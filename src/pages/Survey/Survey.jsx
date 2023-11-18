import { useEffect } from "react";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import Rating from "../../components/Rating/Rating";
import "./Survey.css";
import QuestionGroup from "../../components/QuestionGroup/QuestionGroup";

const noteList = [
  "Rất ít quan tâm",
  "Ít quan tâm",
  "Bình thường",
  "Quan tâm",
  "Rất quan tâm",
];

const questionList = ["xyz", "xyz"];

const Survey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="survey__container">
      <div className="subject_choose__group lg:flex items-center lg:justify-center justify-start px-10 lg:px-24 flex-wrap gap-5">
        <span className="text-[#F26F33] text-3xl mr-[99px] font-bold">
          Lựa chọn môn học
        </span>
        <div className="flex-1 mt-8 lg:mt-0">
          <DropDownMenu menuItems={[1, 2, 3, 4, 5]} />
        </div>
      </div>
      <div className="note max-w-[700px] mx-2 md:mx-auto mt-[42px] lg:mt-[108px] mb-[108px] border border-[#F26F33] px-[30px] py-10 rounded-[20px]">
        <h3 className="mb-8">Chú thích</h3>
        {[...Array(5)].map((_, id) => (
          <div className="flex items-center justify-between mb-[27px] last:mb-0 lg:px-16 px-5">
            <span>
              {[...Array(5)].map((_, index) =>
                index <= id ? (
                  <i className="fa-solid fa-heart text-[#F26F33] text-[30px] mr-4 last:mr-0"></i>
                ) : (
                  <i className="fa-regular fa-heart text-[30px] mr-4 last:mr-0"></i>
                )
              )}
            </span>
            <span>{noteList[id]}</span>
          </div>
        ))}
      </div>
      <div className="px-5">
        {questionList.map((question, index) => (
          <div className="mb-14" key={index}>
            <QuestionGroup
              questionLabel={index + 1 + ". " + question}
              questionID={index}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-[156px] mt-[200px]">
        <button
          className="rounded-[50px] outline-none shadow-md shadow-black/30 
          leading-8 bg-[#F26F33] text-white px-20 py-4 text-center hover:opacity-70 transition-opacity duration-500 text-[26px]"
        >
          Gửi kết quả
        </button>
      </div>
    </div>
  );
};

export default Survey;
