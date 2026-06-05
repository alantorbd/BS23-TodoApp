import { RouterProvider } from "react-router";
import router from "./routes/MainRouter.jsx";
import TaskContextProvider from "./contexts/taskContext.jsx";
import ThemeContextProvider from "./contexts/ThemeContext.jsx";
function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
