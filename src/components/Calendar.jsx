import { useDetails } from "../context/DetailsContext";

const Calendar = () => {
  const {
    selectedDate,
    setSelectedDate,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
  } = useDetails();

  const handleDateClick = (date) => {
    if (date < new Date()) return; // Do not allow selection of past dates
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  // Function to generate an array of days in a month
  const getDaysInMonth = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from(
      { length: daysInMonth },
      (_, i) => new Date(year, month, i + 1)
    );
  };

  // Function to get the name of the month
  const getMonthName = (month) => {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      new Date(0, month)
    );
  };

  // Function to render a single day cell
  const renderDayCell = (date) => {
    const isPastDate = date < new Date();
    return (
      <div
        key={date}
        className={`day cursor-pointer text-center text-md font-semibold mx-auto w-[35px] md:w-[45px] md:h-[45px] h-[35px] rounded-full inline-flex justify-center items-center bg-[#eff5ff]  ${
          selectedDate && date.toDateString() === selectedDate.toDateString()
            ? "!bg-[#0269fc] text-white"
            : isPastDate
            ? "!bg-white text-gray-400"
            : "hover:bg-[#0269fc] hover:text-white text-[#0269fc]"
        }`}
        onClick={() => handleDateClick(date)}
        disabled={isPastDate}
      >
        <span className=" text-md">{date.getDate()}</span>
      </div>
    );
  };

  // Function to render the calendar grid for a month
  const renderMonthGrid = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const daysBefore = Array.from(
      { length: startingDayOfWeek },
      (_, i) => new Date(currentYear, currentMonth, -i)
    ).reverse();

    return (
      <div className="month grid grid-cols-7 gap-y-3">
        {daysBefore.map((day) => (
          <div key={day} className="day empty"></div>
        ))}
        {daysInMonth.map((day) => renderDayCell(day))}
      </div>
    );
  };

  return (
    <div className="calendar px-4 md:py-10 md:p-10 w-full flex-col items-center justify-center max-w-[500px]">
      <h2 className="text-2xl font-semibold mb-5">Select Date</h2>
      <div className="w-[75%] mx-auto flex justify-between items-center mb-4 max-w-[350px]">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 flex items-center justify-center text-2xl bg-white text-gray-400 hover:bg-[#eff5ff] hover:text-[#0269fc] w-[40px] h-[40px] rounded-[50%]"
        >
          {"<"}
        </button>
        <div>
          <h2 className="text-2xl font-medium">
            {getMonthName(currentMonth)}, {currentYear}
          </h2>
        </div>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 inline-flex items-center justify-center text-2xl bg-white text-gray-400 hover:bg-[#eff5ff] hover:text-[#0269fc] w-[40px] h-[40px] leading-none rounded-full"
        >
          {">"}
        </button>
      </div>

      <div className="days grid grid-cols-7 text-center mb-3">
        <div className="day-header hidden md:block">SUN</div>
        <div className="day-header hidden md:block">MON</div>
        <div className="day-header hidden md:block">TUE</div>
        <div className="day-header hidden md:block">WED</div>
        <div className="day-header hidden md:block">THU</div>
        <div className="day-header hidden md:block">FRI</div>
        <div className="day-header hidden md:block">SAT</div>
        <div className="day-header md:hidden">S</div>
        <div className="day-header md:hidden">M</div>
        <div className="day-header md:hidden">T</div>
        <div className="day-header md:hidden">W</div>
        <div className="day-header md:hidden">T</div>
        <div className="day-header md:hidden">F</div>
        <div className="day-header md:hidden">S</div>
      </div>

      {renderMonthGrid()}
    </div>
  );
};

export default Calendar;
