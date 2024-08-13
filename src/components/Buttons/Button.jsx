import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

function Button({ link, className, children }) {
  const buttonClasses = `min-w-64 px-8 py-3 bg-main-black text-zinc-50 rounded-3xl text-center max-w-xs ${className}`
  return (
    <NavLink
      to={link}
      className={buttonClasses}
    >
      {children}
    </NavLink>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
}

export default Button
