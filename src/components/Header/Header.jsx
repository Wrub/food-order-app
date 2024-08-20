import { useEffect, useState } from "react"
import { BriefcaseBusiness, LogOut, Map, ShoppingBasketIcon, SlidersHorizontal } from "lucide-react"
import SelectedPlace from "./components/SelectedPlace"
import { getGeocodingData } from "../../services/useGeocoding"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../store/CartContext"
import UserProgressContext from "../../store/UserProgressContext"

function Header() {
  const [userPlace, setUserPlace] = useState(null)
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  useEffect(() => {
    const fetchGeocodingData = async (latitude, longitude) => {
      const result = await getGeocodingData(latitude, longitude)

      if (result.success) {
        setUserPlace({
          id: 1,
          shortcut: `Lat: ${latitude}, Lon: ${longitude}`,
          address: result.address,
        })
      } else {
        console.error(result.message)
        setUserPlace({
          id: 0,
          shortcut: `Lat: ${latitude}, Lon: ${longitude}`,
          address: "Erro ao buscar endereço",
        })
      }
    }

    // Captura a localização do usuário
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetchGeocodingData(latitude, longitude)
      },
      (error) => {
        console.error("Erro ao obter a localização:", error)
        setUserPlace({
          id: 0,
          shortcut: "Localização não disponível",
          address: "Erro ao obter a localização",
        })
      },
    )
  }, [])

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <header className="flex items-center gap-1 relative">
      <div className="bg-main-orange w-fit h-fit p-1.5 rounded-full">
        <BriefcaseBusiness
          size={20}
          className="text-white"
        />
      </div>
      {userPlace && (
        <SelectedPlace
          key={userPlace.id}
          placeShortcut={userPlace.shortcut}
          address={userPlace.address}
        />
      )}
      <div className="flex gap-1 items-center">
        <button className="bg-gray-50% rounded-full p-1.5">
          <SlidersHorizontal
            size={20}
            className="text-black-80%"
          />
        </button>
        <button className="bg-gray-50% rounded-full p-1.5">
          <Map
            size={20}
            className="text-black-80%"
          />
        </button>
        <NavLink
          to={"/login/"}
          className="bg-orange-80% rounded-full p-1.5 ml-2 hover:bg-main-orange transition-colors"
          title="Exit account"
        >
          <LogOut
            size={20}
            className="text-zinc-50"
          />
        </NavLink>
      </div>
      <button
        title="Show cart"
        onClick={handleShowCart}
        className="p-1.5 bg-gray-50% rounded-full text-black-80% hover:bg-main-orange hover:text-white transition-colors absolute right-0"
      >
        <ShoppingBasketIcon
          className="relative object-contain"
          size={24}
        />
        {totalCartItems > 0 && <span>{totalCartItems}</span>}
      </button>
    </header>
  )
}

export default Header
