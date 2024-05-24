//import { Navigation } from "./components/navigation";
//import { Sidebar } from "./components/sidebar";
//import { Footer } from "./components/footer";

import { RouterProvider } from "react-router-dom";
import router from "./modules/router";

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}