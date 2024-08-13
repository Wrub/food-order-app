import PropTypes from "prop-types"

function OrangeButton({ className, children, ...props }) {
  const buttonClasses = `min-w-64 px-8 py-3 bg-main-orange text-zinc-50 rounded-3xl text-center max-w-xs block mx-auto ${className}`
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}

OrangeButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
  props: PropTypes.node,
}

export default OrangeButton
