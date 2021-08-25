import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
