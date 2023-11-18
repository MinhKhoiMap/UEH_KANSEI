import { useNavigate } from "react-router-dom";
import process_map from "../../assets/images/process_map.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="homepage__section pb-[71px]">
      <h3
        className="text-[50px] text-center text-[#005F69] 
                  font-medium leading-[70px] px-4 md:px-8 xl:px-0"
      >
        HỆ THỐNG TƯ VẤN LỰA CHỌN GIẢNG VIÊN
      </h3>
      <div className="flex justify-center mt-[45px]">
        <button
          className="outline-none shadow-md shadow-black/30 rounded-[50px]
                leading-9 bg-[#F26F33] text-white px-6 py-5 text-center hover:opacity-70 transition-opacity duration-500 text-[26px]"
        >
          Tìm kiếm giảng viên phù hợp với chính bạn
        </button>
      </div>
      <div className="mt-20 bg-[#D9D9D973] py-4 px-6 rounded-[30px] mx-7 xl:mx-0">
        <h4 className="text-center text-[28px]">
          Bạn đau đầu vì không biết lựa chọn theo học lớp của giảng viên nào?
        </h4>
        <p className="mt-6 text-center font-light text-[26px]">
          Chỉ cần trả lời các câu hỏi trắc nghiệm mức độ quan tâm của bạn đối
          với một số khía cạnh đánh giá về một giảng viên, chúng tôi sẽ cung cấp
          cho bạn danh sách các giảng viên phù hợp nhất.
        </p>
      </div>
      <div className="mt-[87px] mb-[61px]">
        <h3 className="uppercase text-center text-[40px] text-[#005F69] font-medium">
          Quy Trình
        </h3>
      </div>
      <figure className="mx-auto">
        <img src={process_map} alt="process map" />
      </figure>
      <div className="mt-[70px] flex justify-center">
        <button
          className="rounded-[50px] outline-none shadow-md shadow-black/30 
          leading-8 bg-[#F26F33] text-white px-6 py-6 text-center hover:opacity-70 transition-opacity duration-500 text-[26px] min-w-[425px]"
          onClick={() => navigate("./survey")}
        >
          Bắt đầu test
        </button>
      </div>
    </section>
  );
};

export default HomePage;
