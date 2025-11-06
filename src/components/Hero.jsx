function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              Digital agency
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Chez Guizou — we craft fast, beautiful websites and web apps
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              From idea to launch, we design, build, and ship experiences that convert. Modern tech, clean design, measurable results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50">
                See our work
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white grid place-items-center">
                <div className="text-center p-6">
                  <p className="text-sm uppercase tracking-widest text-gray-400">Core stack</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">React • Next.js • FastAPI • MongoDB</p>
                  <p className="mt-4 text-gray-600">Performance, accessibility and scalability baked-in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
