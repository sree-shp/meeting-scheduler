import "./App.css";
import Calendar from "./components/Calendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectDateTime from "./pages/SelectDateTime";
import TimeSelector from "./components/TimeSelector";
import { DetailsProvider } from "./context/DetailsContext";
import UserDetails from "./pages/UserDetails";
import Confirmation from "./pages/Confirmation";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <DetailsProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                index
                element={<SelectDateTime element={<Calendar />} step={1} />}
              />
              <Route
                path="/select-time"
                element={<SelectDateTime element={<TimeSelector />} step={2} />}
              />
              <Route path="/user-details" element={<UserDetails />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </BrowserRouter>
        </DetailsProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
