import { useNavigate } from "react-router-dom";
import MeetingDetails from "../components/MeetingDetails";
import { useDetails } from "../context/DetailsContext";
import { useState } from "react";

function SelectDateTime({ element, step }) {
  const { selectedDate, selectedTime } = useDetails();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleNextClick() {
    if (step === 1) {
      if (selectedDate) {
        navigate("/select-time");
      } else {
        setError("Please select a date");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } else if (step === 2) {
      if (selectedTime) {
        navigate("/user-details");
      } else {
        setError("Please select a time");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  }

  function handleBackClick() {
    if (step === 2) {
      navigate("/");
    }
  }

  return (
    <>
      {error && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-black/20 flex justify-center items-center">
          <div className="flex justify-center items-center bg-white rounded-lg w-[75%] max-w-[250px] h-[150px] text-lg">
            {error}
          </div>
        </div>
      )}

      <div className="md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0 z-[-1000] md:bg-black/20 flex justify-center items-center overflow-auto">
        <div className="w-full flex flex-col md:flex-row gap-5 md:h-[600px] md:max-w-[800px] rounded-lg shadow-lg relative bg-white px-3 md:px-0">
          <MeetingDetails step={step} />
          <div className="w-full flex flex-col justify-center items-center">
            {element}
            <div className="w-full flex justify-center md:justify-center gap-2 p-2 my-3 md:mt-0">
              {!(step === 1) && (
                <button
                  type="submit"
                  className="w-full max-w-[150px] py-1 text-gray-400 font-medium border-2 border-gray-400 rounded-md hover:bg-gray-400 hover:text-white"
                  onClick={handleBackClick}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="w-full max-w-[150px] py-1 text-lg font-medium text-[#0269fc] border-2 border-[#0269fc] rounded-md hover:bg-[#0269fc] hover:text-white"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectDateTime;
