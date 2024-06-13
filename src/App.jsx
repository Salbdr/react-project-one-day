import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Login from "./component/login";
import SignUp from "./component/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
