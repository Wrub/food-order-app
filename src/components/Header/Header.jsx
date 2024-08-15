import { useEffect, useState } from "react"
import { BriefcaseBusiness, Map, SlidersHorizontal } from "lucide-react"
import SelectedPlace from "./components/SelectedPlace"
import { getGeocodingData } from "../../services/geocodingService"

function Header() {
  const [userPlace, setUserPlace] = useState(null)

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

  return (
    <header className="flex items-center gap-1">
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
