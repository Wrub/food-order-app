import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Restaurants from "../pages/Restaurants/Restaurants"

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<Home />}
    />
    <Route
      path="/login"
      element={<Login />}
    />
    <Route
      path="/restaurants"
      element={<Restaurants />}
    />
  </Routes>
)

export default AppRoutes
