import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./m-main.css";

const Main = props => {
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className="container">
      <div
        className={`bg-${theme} text-${constrat} d-flex flex-column align-items-center`}
      >
        <h1 className="title mx-0 text-center my-5">Frontend Developer</h1>
        <h6 className="subtitle text-center">
          I design and code beautifully simple things, and I love what I do.
        </h6>
        <img
          className="my-5 img-fluid w-25 rounded-circle"
          src="https://avatars1.githubusercontent.com/u/41874858?v=4"
          alt="ercument lacin"
        />
      </div>
    </div>
  );
};

export default Main;
