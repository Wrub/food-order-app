import Header from "../../components/Header/Header"
import MealCard from "../../components/MealCard/MealCard"
import { useEffect, useState } from "react"
import axios from "axios"
import Cart from "../../components/Cart/Cart"

function RestaurantsAndFoods() {
  const [mealsData, setMealsData] = useState([])
  const [loadingMeals, setLoadingMeals] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  async function fetchMeals() {
    try {
      setFetchError(null)
      setLoadingMeals(true)
      const response = await axios.get("http://localhost:8080/available-meals")

      const meals = response.data
      setMealsData(meals)
      setLoadingMeals(false)
    } catch (error) {
      console.error("Error fetching meals", error)
      setLoadingMeals(false)
      setFetchError(true)
    }
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  return (
    <main className="container pt-8">
      <Header />
      <section className="pt-6">
        <h1 className="text-3xl font-semibold">Restaurants & Foods</h1>
      </section>
      <section
        id="meals"
        className="flex flex-col gap-4 py-8 md:grid md:row-auto md:grid-cols-2 lg:grid-cols-3"
      >
        {loadingMeals && <p>Loading meals...</p>}
        {mealsData &&
          mealsData.map((meal) => {
            return (
              <MealCard
                key={meal.id}
                meal={meal}
              />
            )
          })}
        {fetchError && (
          <div className="bg-yellow-80% text-black-80% p-4 space-y-4 rounded-lg">
            <p className="text-lg font-semibold">
              It was not possible to show the available meals...
            </p>
            <button
              type="button"
              onClick={() => fetchMeals()}
              className="bg-zinc-50 px-4 py-1 rounded-full font-medium"
            >
              Retry
            </button>
          </div>
        )}
      </section>
      <Cart />
    </main>
  )
}

export default RestaurantsAndFoods
