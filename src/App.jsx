import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/Routes"
import { CartContextProvider } from "./store/CartContext"
import { UserProgressContextProvider } from "./store/UserProgressContext"

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}

export default App
