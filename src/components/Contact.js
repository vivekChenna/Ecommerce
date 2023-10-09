import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const darkMode = useSelector((store) => store.app.DarkMode);
  return (
    <div className=" flex flex-col gap-4  w-screen h-[90.5vh] justify-center items-center">
      <p
        className={
          darkMode
            ? "text-white text-4xl font-semibold"
            : " text-4xl font-semibold"
        }
      >
        Reach Out To Us
      </p>
      <div>
        <form
          className=" flex flex-col gap-4"
          method="POST"
          action="https://formspree.io/f/xqkvgrbo"
        >
          <div className="flex flex-col  border border-black w-96 rounded-sm g">
            <input
              type="text"
              placeholder="Name"
              name="userName"
              required
              autoComplete="off"
              className="py-2 w-full text-lg outline-none pl-2"
            />
          </div>
          <div className="border border-black  w-96 rounded-sm">
            <input
              type="email"
              className="py-2 w-full text-lg outline-none pl-2"
              placeholder="Email"
              name="userEmail"
              required
              autoComplete="off"
            />
          </div>
          <textarea
            name="Message"
            className="border border-black outline-none pl-1"
            placeholder="message....."
            cols="30"
            rows="10"
            required
            autoComplete="off"
          ></textarea>
          <div>
            <input
              type="submit"
              placeholder="send"
              className=" bg-blue-400 px-2 py-1 font-bold rounded-lg cursor-pointer text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
