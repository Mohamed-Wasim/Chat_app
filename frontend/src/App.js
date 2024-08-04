import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage/DashBoardPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <RegisterPage />,
  },
]);
function App() {
  return (
    <div className="appContainer">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
