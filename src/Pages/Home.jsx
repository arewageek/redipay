import { Hero } from "../Components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-5">
      <div className="flex justify-center items-center w-full h-full md:px-24">
        <Hero />
      </div>
    </main>
  )
}
