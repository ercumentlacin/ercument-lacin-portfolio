import React from "react";

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";

import AppContainer from "./Components/AppContainer";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
