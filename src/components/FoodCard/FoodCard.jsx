import { Coins } from "lucide-react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

function FoodCard({ meal }) {
  return (
    <NavLink
      data-meal-id={meal.id}
      className="shadow-md max-h-56 bg-white h-56 rounded-lg hover:ring-1 hover:ring-orange-50% hover:shadow-none transition-all ease-out"
    >
      <img
        className="max-h-32 w-full object-cover object-center rounded-t-lg"
        src="https://dummyimage.com/300/09f.png/fff"
        alt={`Picture of the ${meal.name} meal`}
        loading="lazy"
      />
      <div
        id="meal-info"
        className="px-4 py-2"
      >
        <h3 className="font-medium text-main-black">{meal.name}</h3>
        <p className="truncate text-xs py-0.5 text-black-80%">{meal.description}</p>
        <div className="flex text-xs text-black-80% pt-4">
          <p className="flex items-center gap-1">
            <Coins
              size={14}
              className="text-main-orange"
            />{" "}
            {meal.price}
          </p>
        </div>
      </div>
    </NavLink>
  )
}

FoodCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}

export default FoodCard
