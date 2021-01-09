import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import ThemeContext from "../Context/ThemeContext";
import Header from './Base/Header'
import Main from '../pages/Main/Main'
import About from '../pages/About/About'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comments from '../pages/Comments/Comments'
import Contact from '../pages/Contact/Contact'

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);

  const body = document.body;
  theme == "light"
    ? body.classList.remove("bg-dark") & body.classList.add("bg-light")
    : body.classList.remove("bg-light") & body.classList.add("bg-dark");
  // upsi
  
    
  return (
    <main className={`bg-${theme}`}>
      <Router>
        <Header />
        
        <Switch>
        <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
       

      </Router>
    </main>
  );
};

export default AppContainer;
