// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(<App />, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot
import App from "./App";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);