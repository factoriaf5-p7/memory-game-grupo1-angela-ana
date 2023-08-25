import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Routes } from "@/routes";
import './assets/styles/index.css'

const router = createBrowserRouter(createRoutesFromElements(Routes))
const App = () => <RouterProvider router={router} />;

export default App