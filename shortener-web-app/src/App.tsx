import React from "react";
import { log } from "./logger";

const App = () => {
  const handleClick = () => {
    log({
      stack: "App > handleClick()",
      level: "INFO",
      package: "FrontendApp",
      message: "Button clicked from frontend"
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Logging Middleware Frontend</h1>
      <button onClick={handleClick}>Log Button Click</button>
    </div>
  );
};

export default App;
