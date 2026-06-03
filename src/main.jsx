import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./routes/MainRouter.jsx";
import TaskContextProvider from "./contexts/taskContext.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
