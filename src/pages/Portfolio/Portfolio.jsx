import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./p-portfolio.css";
import { portfolioData } from "./portfolioData";
import PorfolioItem from "../../Components/PorfolioItem/PorfolioItem";

const Portfolio = props => {
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className={`container bg-${theme} text-${constrat}`}>
      <div className="row mt-5 px-5">
        <h1>A Selection Of Stuff I've Built </h1>
      </div>
      {portfolioData.map(item => {
        return <PorfolioItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Portfolio;
