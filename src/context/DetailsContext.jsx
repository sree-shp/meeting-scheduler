import { useState, createContext, useContext } from "react";

const DetailsContext = createContext();

function DetailsProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [selectedTime, setSelectedTime] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [interests, setInterests] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <DetailsContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        selectedTime,
        setSelectedTime,
        name,
        setName,
        email,
        setEmail,
        interests,
        setInterests,
        additionalInfo,
        setAdditionalInfo,
        employeeCount,
        setEmployeeCount,
        errors,
        setErrors,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

function useDetails() {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error("Attempt to access context from outside the scope");
  }

  return context;
}

export { DetailsProvider, useDetails };
