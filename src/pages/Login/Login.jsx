import { useNavigate } from "react-router-dom"
import OrangeButton from "../../components/Buttons/OrangeButton"

function Login() {
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    navigate("/restaurants")
  }

  return (
    <main className="pt-40 h-screen bg-zinc-50">
      <div className="container">
        <section>
          <h1 className="text-3xl font-semibold">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="flex flex-col mt-8 gap-2">
              <label className="text-black-80%">Email</label>
              <input
                className="border border-gray-80% rounded-md py-2 pl-4 lg:max-w-sm"
                type="text"
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black-80%">Password</label>
              <input
                className="border border-gray-80% rounded-md py-2 pl-4 lg:max-w-sm"
                type="password"
                placeholder="Password"
              />
            </div>
            <OrangeButton type="submit">Login</OrangeButton>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Login
