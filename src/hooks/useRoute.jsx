import { createBrowserRouter } from "react-router-dom";
import Body from "../pages/Body";
import AppLayout from "../AppLayout";
const useRoute = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
      ],
    },
  ]);
  return appRoute;
};
export default useRoute;
