import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/dash"/>
    </Route>,
  ),
);

export { router };
