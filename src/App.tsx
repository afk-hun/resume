import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import MainPage from "./MainPage";
import ResumePage from "./ResumePage";

//export const domainLink = "http://192.168.0.47:3000/resume.json";
//export const domainLink = "http://localhost:3000/resume.json";
export const domainLink = "https://raw.githubusercontent.com/afk-hun/resume/deploy/public/resume.json";

const router = createBrowserRouter([
  { path: "/", element: <MainPage />},
  { path: "/resume", element: <ResumePage />},
]);

function App() {
  return ( <RouterProvider router={router} /> );
}

export default App;
