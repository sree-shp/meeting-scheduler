import { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error(error);
      setHasError(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    };

    window.addEventListener("error", handleError);

    // Cleanup function
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []); // Empty dependency array to run the effect only once

  if (hasError) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center px-5">
        <lottie-player
          src="https://lottie.host/e0be69b0-a786-45e3-b47b-de9ba0681bbb/4WVXbGYemR.json"
          background="##FFFFFF"
          speed="1"
          style={{ width: "200px", height: "200px" }}
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <h1>Something went wrong</h1>
        <h1>Redirecting to Home page</h1>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
