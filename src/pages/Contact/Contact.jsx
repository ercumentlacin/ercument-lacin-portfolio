import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./c-contact.css";

const Contact = props => {
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className={`py-5 mt-5 bg-${theme} text-${constrat} container px-4`}>
      <div className="row">
        <div className="col-sm-6 offset-sm-3 my-5">
          <h1>Get In Touch</h1>
          <p className="lead">
            Dropping a line to say g’day, ask for my resume or see if we can
            build something amazing together? I’d love to hear from you!
          </p>
          <p className="mt-5">
            <strong>Feeling social? Find me on these online spaces too!</strong>
          </p>

          <div className="social-media d-flex justify-content-between mt-4">
            <a href="https://twitter.com/ercument196" target="_blank">
              <i className="fab fa-twitter" aria-hidden="true" />
              <span className="visually-hidden">Twitter</span>
            </a>

            <a href="https://codepen.io/ercument-lacin" target="_blank">
              <i className="fab fa-codepen" aria-hidden="true" />
              <span className="visually-hidden">CodePen</span>
            </a>

            <a href="https://github.com/ercumentlacin" target="_blank">
              <i className="fab fa-github" aria-hidden="true" />
              <span className="visually-hidden">GitHub</span>
            </a>

            <a href="https://ercumentlacin.medium.com/" target="_blank">
              <i className="fab fa-medium-m" aria-hidden="true" />
              <span className="visually-hidden">Medium</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
