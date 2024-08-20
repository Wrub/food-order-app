import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

function Modal({ children, open, className = "" }) {
  const dialog = useRef()

  useEffect(() => {
    const modal = dialog.current
    if (open) {
      modal.showModal()
    }

    return () => modal.close()
  }, [open])

  return createPortal(
    <dialog
      ref={dialog}
      className={`${className} modal`}
    >
      {children}
    </dialog>,
    document.querySelector("body"),
  )
}

export default Modal
