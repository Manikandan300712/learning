import App from "../App";
import Home from "../pages/Home/Home";

export const Router = [
  {
    path: "",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
];
