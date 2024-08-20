import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import RestaurantsAndFoods from "../pages/RestaurantsAndFoods/RestaurantsAndFoods"
import NotFound from "../pages/404/NotFound"

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
      element={<RestaurantsAndFoods />}
    />
    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
)

export default AppRoutes
