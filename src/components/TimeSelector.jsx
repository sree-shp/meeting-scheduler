import { useDetails } from "../context/DetailsContext";

const TimeSelector = () => {
  const { selectedTime, setSelectedTime, selectedDate } = useDetails();

  // Function to handle time selection
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Generate options for time selector (from 10am to 5pm)
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 10; hour <= 17; hour++) {
      options.push(`${hour}:00`);
      options.push(`${hour}:30`);
    }
    return options;
  };

  // Function to format date to "Day, Month Date"
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="px-2 py-2 md:pt-10 md:max-w-[500px] md:px-10 w-full rounded-lg">
      <h2 className="text-2xl font-bold  mb-8">Select Time</h2>
      <div className="grid grid-cols-2  gap-2 mb-5">
        {generateTimeOptions().map((time, index) => (
          <div
            key={index}
            className={`w-full max-w-[150px] justify-self-center p-2 text-md text-center font-semibold border-[#0269fc] text-[#0269fc] border rounded-md cursor-pointer ${
              selectedTime === time
                ? "bg-[#0269fc] !text-white"
                : "hover:bg-[#0269fc] hover:text-white"
            }`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
