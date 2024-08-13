import PropTypes from "prop-types"

function SelectedPlace({ placeShortcut, address }) {
  return (
    <div className="flex truncate text-sm text-black-80%">
      <p className="font-bold">{placeShortcut}</p>
      {placeShortcut && address && <span className="pr-1 select-none">,</span>}
      <p>{address}</p>
    </div>
  )
}

SelectedPlace.propTypes = {
  placeShortcut: PropTypes.string,
  address: PropTypes.string,
}

export default SelectedPlace
