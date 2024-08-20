import { Coins } from "lucide-react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { slugify } from "../../utils/slugify"
import { useContext } from "react"
import CartContext from "../../store/CartContext"

function MealCard({ meal }) {
  const cartCtx = useContext(CartContext)

  function handleAddMealToOrder() {
    cartCtx.addItem(meal)
  }

  return (
    <NavLink
      data-meal-id={meal.id}
      className="relative shadow-md bg-white h-60 rounded-lg hover:ring-2 hover:ring-orange-50% hover:shadow-none transition-all ease-out md:max-w-lg lg:h-72"
    >
      <img
        className="max-h-32 w-full object-cover object-center rounded-t-lg lg:max-h-40"
        src={`http://localhost:8080/${meal.image}`}
        alt={`Picture of the ${meal.name} meal`}
      />
      <div
        id="meal-info"
        className="px-4 py-2"
      >
        <h3 className="font-medium text-main-black">{meal.name}</h3>
        <p className="truncate text-xs py-0.5 text-black-80%">{meal.description}</p>
        <div className="flex text-sm text-black-80% pt-4 justify-between items-center lg:pt-8">
          <p className="flex items-center gap-1">
            <Coins
              size={16}
              className="text-main-orange"
            />
            {meal.price}
          </p>
          <button
            className="py-1 px-4 bg-orange-80% rounded-full text-zinc-50 hover:bg-main-orange transition-colors z-10 absolute right-4"
            title={`Add ${meal.name} to order`}
            onClick={handleAddMealToOrder}
          >
            Add to order
          </button>
        </div>
      </div>
    </NavLink>
  )
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default MealCard
