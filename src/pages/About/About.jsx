import React, {useContext} from "react";
import "./a-about.css";
import ThemeContext from "../../Context/ThemeContext";

const About = props => {
    
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    <div className="py-5 mt-5 container">
      <div className={`bg-${theme} text-${constrat} row px-5 g-5 align-items-center justify-content-center my-5`}>
        <div className="col-md-6">
          <h6>Hi There !</h6>
          <h1>I'm a Frontend Develooper</h1>
          <p>
            Lorem ipsum, dolor, sit amet consectetur adipisicing elit.
            Laboriosam modi minima nesciunt ex. Hic illum possimus recusandae
            voluptatem eos aliquid maxime voluptate. Nemo, debitis vitae quaerat
            impedit animi sunt nisi omnis dicta quidem blanditiis dolorum itaque
            nostrum dolore at obcaecati voluptatem dolorem illum architecto! Rem
            culpa reiciendis sunt tenetur, nobis.
          </p>
        </div>
        <div className="develooper-image col-md-6">
          <img
            className="w-100"
            src="https://ercumentlacin.github.io/css/images/heroBg.jpg"
            alt="Develooper"
          />
        </div>
      </div>
    </div>

  
  );
};

export default About;
