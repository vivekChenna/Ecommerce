import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center justify-center w-[100vw] gap-4 h-[70vh]">
      <p className=" text-6xl">404</p>
      <p>UH OH! You're lost.</p>
      <p>
        The page you are looking for does not exist.How you got here is a
        mystery.But you can click the button below to go back to homepage
      </p>
      <button
        className=" bg-blue-600 rounded-md p-2 text-white font-bold text-lg"
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </button>
    </div>
  );
};

export default ErrorPage;
