import Button from "../../components/Buttons/Button"

function Home() {
  return (
    <main className="h-dvh bg-gradient-to-t from-main-orange via-40% via-orange-20% to-50% to-zinc-50">
      <div className="container pt-32">
        <section className="h-2/3 flex justify-center flex-col gap-14">
          <div className="max-w-72 flex flex-col gap-2">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to <span className="text-main-orange">Fast Food</span>
            </h1>
            <h2 className="text-black-50%">Get your favorite meals delivered quickly at your place.</h2>
          </div>
          <Button
            link="/login"
            className="self-center w-full"
          >
            Start with email
          </Button>
        </section>
      </div>
    </main>
  )
}

export default Home
