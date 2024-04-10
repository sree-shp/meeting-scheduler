import { useEffect, useState } from "react";
import { useDetails } from "../context/DetailsContext";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const { name, email, selectedDate, selectedTime } = useDetails();
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  function handleGoToHome() {
    navigate("/");
  }

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
  }, []);

  return (
    <div className="h-screen md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0 z-[1000] md:bg-black/20 flex justify-center items-center ">
      <div className="w-full flex flex-col items-center justify-center gap-2 md:max-w-[800px] rounded-lg md:shadow-lg relative bg-white md:h-[600px] px-3">
        {animation && (
          <lottie-player
            src="https://lottie.host/c03f2e82-6a8b-4e90-8212-8278d14630c7/esTFpWR4aW.json"
            background="#FFFFFF"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        )}
        {!animation && (
          <>
            <div className="flex items-center gap-2">
              <img
                className="w-[25px] h-[25px]"
                src="confirmation-icon.png"
                alt=""
              />
              <h2 className="text-2xl font-bold ">Meeting Scheduled</h2>
            </div>
            <p className="">
              A calendar invitation has been sent to your email
            </p>
            <div className="my-5 flex flex-col gap-4 border-2 border-gray-300 px-10 py-4 rounded-lg">
              <div className="flex gap-2">
                <img
                  className="w-[25px]"
                  src="https://cdn-icons-png.flaticon.com/512/266/266033.png"
                  alt=""
                />
                <span className="">{name}</span>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-[25px]"
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt=""
                />
                <span className="">{email}</span>
              </div>

              <div className="flex gap-2">
                <div className="">
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/591/591576.png"
                    }
                    alt=""
                    className="w-[25px]"
                  />
                </div>
                <div className="">
                  {selectedTime} {formatDate(selectedDate)}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Thank you for scheduling with us.
            </p>
            <button
              type="submit"
              className="w-full max-w-[200px] py-1 text-md font-medium text-white border-2 border-[#0269fc] bg-[#0269fc] rounded-md hover:bg-white  hover:text-[#0269fc] my-3"
              onClick={handleGoToHome}
            >
              Go To Home Page
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
