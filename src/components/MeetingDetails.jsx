import { Link } from "react-router-dom";
import { useDetails } from "../context/DetailsContext";

function MeetingDetails({ step }) {
  const { selectedDate, selectedTime } = useDetails();

  const formatDate = (date) => {
    if (selectedDate) {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    }
  };
  return (
    <div className="relative md:w-[50%] md:border-r-2 ">
      <Link to="/" className="decoration-none ">
        <div className="relative right-4 md:static flex flex-row items-center md:flex-col">
          <div className=" md:border-b-2 md:w-full flex md:justify-center items-center">
            <img src="logo.jpg" alt="" className="w-[100px] md:w-[200px] " />
          </div>
          <h1 className="relative right-8 md:static text-3xl text-black font-bold decoration-none tracking-wide md:mt-8 md:mb-4 px-4">
            GLYPH
          </h1>
        </div>
      </Link>
      <div className="">
        <div className="px-4">
          Book a meeting with our team. Talk to a real person about how to get
          your processes set up with us or not.
        </div>
      </div>
      {!(step === 1) && (
        <div className="rounded-lg py-4 flex flex-row items-center  gap-2 px-4">
          <div className="">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/591/591576.png"}
              alt=""
              className="w-[25px]"
            />
          </div>
          <div className="w-full text-gray-500 flex items-center gap-2 text-md   rounded-md ">
            <div className="">{selectedTime}</div>
            <div className="">{formatDate(selectedDate)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetingDetails;
