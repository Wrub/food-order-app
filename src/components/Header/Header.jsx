import { BriefcaseBusiness, Map, SlidersHorizontal } from "lucide-react"
import SelectedPlace from "./components/SelectedPlace"

function Header() {
  const UserPlace = {
    shortcut: "Work",
    address: "Av. Visconde de Guarapuava 3263",
    id: Math.random() * 100,
  }

  return (
    <header className="flex items-center gap-1">
      <div className="bg-main-orange w-fit h-fit p-1.5 rounded-full">
        <BriefcaseBusiness
          size={20}
          className="text-white"
        />
      </div>
      <SelectedPlace
        key={UserPlace.id}
        placeShortcut={UserPlace.shortcut}
        address={UserPlace.address}
      />
      <span className="bg-gray-20% rounded-full p-1.5">
        <SlidersHorizontal
          size={20}
          className="text-black-80%"
        />
      </span>
      <span className="bg-gray-20% rounded-full p-1.5">
        <Map
          size={20}
          className="text-black-80%"
        />
      </span>
    </header>
  )
}

export default Header
