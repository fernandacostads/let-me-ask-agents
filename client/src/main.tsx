import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

// biome-ignore lint/style/noNonNullAssertion: using non-null assertion because root element is guaranteed to exist
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
