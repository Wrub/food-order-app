import { useContext } from "react"
import Modal from "../Modal/Modal"
import CartContext from "../../store/CartContext"
import UserProgressContext from "../../store/UserProgressContext"
import { Barcode, X } from "lucide-react"

function Cart() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return (totalPrice += item.quantity * +item.price)
  }, 0)

  function handleCloseCart() {
    userProgressCtx.hideCart()
  }

  return (
    <Modal
      className="cart w-full max-w-xs md:max-w-lg xl:max-w-5xl p-8 backdrop:backdrop-brightness-50 backdrop:backdrop-blur-sm h-screen rounded-lg lg:px-16 overflow-y-scroll relative"
      open={userProgressCtx.progress === "cart"}
    >
      <h2 className="text-2xl font-bold lg:text-3xl">Your order</h2>
      <section>
        <ul>
          {cartCtx.items.map((item) => {
            return (
              <li
                key={item.id}
                className="flex gap-3 border-b-2 py-3 last:border-b-0"
              >
                <img
                  className="size-24 rounded-lg lg:size-48"
                  src={`http://localhost:8080/${item.image}`}
                  alt={`Picture of a ${item.name}`}
                  loading="lazy"
                />
                <div className="text-sm flex flex-col justify-between lg:text-base">
                  <div className="lg:space-y-4">
                    <p className="font-medium text-base">{item.name}</p>
                    <p className="truncate max-w-36 font-light text-xs lg:text-base lg:overflow-visible text-wrap lg:max-w-xl">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-between text-orange-80%">
                    <p className="text-orange-80%">{item.price * item.quantity}</p>
                    <p className="flex gap-4 lg:text-lg">
                      <button>-</button>
                      {item.quantity}
                      <button>+</button>
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="absolute right-6 bottom-5">Total Price: {cartTotal}</p>
        <div className="absolute top-5 right-10 flex gap-2">
          <button
            title="Close Cart"
            onClick={handleCloseCart}
            className="p-1 bg-orange-80% rounded-full"
          >
            <X className="text-zinc-50" />
          </button>
          <button
            className="p-1 bg-orange-80% rounded-full"
            title="Go to Checkout"
          >
            <Barcode className="text-zinc-50" />
          </button>
        </div>
      </section>
    </Modal>
  )
}

export default Cart
