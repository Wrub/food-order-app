// services/geocodingService.js
import axios from "axios"

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

export const getGeocodingData = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`,
    )

    if (response.data.status === "OK") {
      const address = response.data.results[0]?.formatted_address
      return {
        success: true,
        address: address || "Endereço não encontrado",
      }
    } else {
      return {
        success: false,
        message: `Geocoding API Error: ${response.data.status}`,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: "Erro na requisição ao Google Geocoding API",
    }
  }
}
