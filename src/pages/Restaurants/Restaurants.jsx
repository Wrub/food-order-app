import Header from "../../components/Header/Header"
import AVAIBLE_MEALS from "../../../dummy-data/meals.json"
import FoodCard from "../../components/FoodCard/FoodCard"

function Restaurants() {
  return (
    <>
      <main className="container pt-8">
        <Header />
        <section className="pt-6">
          <h1 className="text-3xl font-semibold">Restaurants & Foods</h1>
        </section>
        <section
          id="meals"
          className="flex flex-col gap-4 py-8"
        >
          {AVAIBLE_MEALS.map((meal) => {
            return (
              <FoodCard
                key={meal.id}
                meal={meal}
              />
            )
          })}
        </section>
      </main>
    </>
  )
}

export default Restaurants
