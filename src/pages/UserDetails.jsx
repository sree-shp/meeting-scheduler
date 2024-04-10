import { useNavigate } from "react-router-dom";
import { useDetails } from "../context/DetailsContext";
import MeetingDetails from "../components/MeetingDetails";

function FormComponent() {
  const {
    name,
    setName,
    email,
    setEmail,
    employeeCount,
    setEmployeeCount,
    interests,
    setInterests,
    additionalInfo,
    setAdditionalInfo,
    errors,
    setErrors,
  } = useDetails();
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is not valid";
    }
    return errors;
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((item) => item !== value));
    }
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    const errors = validate();
    if (!(Object.keys(errors).length === 0)) {
      setErrors(errors);
    } else {
      navigate("/confirmation");
    }
  };

  function handleBackClick(event) {
    event.preventDefault();
    navigate(-1);
    console.log(1);
  }

  return (
    <>
      <div className="md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0 z-[1000] bg-white md:bg-black/20 flex justify-center items-center ">
        <div className=" flex md:flex-row flex-col gap-2 md:max-w-[800px] rounded-lg md:shadow-lg relative bg-white md:h-[600px] px-3 md:px-0">
          <MeetingDetails />
          <div className="p-2 w-full  md:overflow-auto md:p-10">
            <h1 className="text-left text-2xl font-semibold mb-5">
              Enter Details
            </h1>
            <form className="max-w-sm text-left">
              <div className="mb-4 ">
                <label className="block   font-medium mb-2">
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setErrors({});
                      setName(e.target.value);
                    }}
                    className="mt-1 p-2 border font-normal border-gray-300 rounded w-full"
                  />
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block   font-medium mb-2">
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setErrors({});
                      setEmail(e.target.value);
                    }}
                    className="mt-1 p-2 border font-normal border-gray-300 rounded w-full"
                  />
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <p className="  font-medium mb-2">Select Audience Size:</p>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="For you"
                    checked={employeeCount === "For you"}
                    onChange={() => setEmployeeCount("For you")}
                    className="form-radio h-5 w-5 "
                  />
                  <span className="ml-2">For you</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="For you"
                    checked={employeeCount === "<10 people"}
                    onChange={() => setEmployeeCount("<10 people")}
                    className="form-radio h-5 w-5 "
                  />
                  <span className="ml-2">{"<10 people"}</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="For you"
                    checked={employeeCount === "10-50 people"}
                    onChange={() => setEmployeeCount("10-50 people")}
                    className="form-radio h-5 w-5 "
                  />
                  <span className="ml-2">10-50 people</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="For you"
                    checked={employeeCount === "50+ people"}
                    onChange={() => setEmployeeCount("50+ people")}
                    className="form-radio h-5 w-5 "
                  />
                  <span className="ml-2">50+ people</span>
                </label>
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <p className="text-gray-700  font-medium mb-2">
                  Select Interests:
                </p>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Leadership"
                    checked={interests.includes("Leadership")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Leadership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Consulting"
                    checked={interests.includes("Consulting")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Consulting</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Product Management"
                    checked={interests.includes("Product Management")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Product Management</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Design"
                    checked={interests.includes("Design")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Design</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Engineering"
                    checked={interests.includes("Engineering")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Engineering</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Sales"
                    checked={interests.includes("Sales")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Sales</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Marketing"
                    checked={interests.includes("Marketing")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Marketing</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Human Resources"
                    checked={interests.includes("Human Resources")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Human Resources</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Education"
                    checked={interests.includes("Education")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Education</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Something else"
                    checked={interests.includes("Something else")}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 "
                  />
                  <span className="ml-2">Something else</span>
                </label>
                {/* Repeat similar labels for other interests */}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700  font-medium mb-2">
                  Please share anything that will help for the meeting:
                  <textarea
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  ></textarea>
                </label>
              </div>

              <div className="flex justify-center gap-2 w-full my-3">
                <button
                  className="w-full max-w-[150px] border-gray-400 text-gray-400 font-medium border-2 rounded-md py-1 hover:bg-gray-400 hover:text-white"
                  onClick={handleBackClick}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full max-w-[150px] border-2 border-[#0269fc] text-[#0269fc] text-lg font-medium rounded-md py-1 hover:bg-[#0269fc] hover:text-white "
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormComponent;
