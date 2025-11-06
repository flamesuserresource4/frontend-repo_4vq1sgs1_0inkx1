function Work() {
  const projects = [
    {
      name: 'SaaS Dashboard',
      tag: 'Web App',
      desc: 'Analytics-heavy dashboard with FastAPI backend and React frontend.'
    },
    {
      name: 'Boutique E‑commerce',
      tag: 'E‑commerce',
      desc: 'High-converting storefront with secure payments and CMS.'
    },
    {
      name: 'Portfolio Site',
      tag: 'Website',
      desc: 'Lightning-fast static site with SEO best practices.'
    },
  ]

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A few recent projects we loved building.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200"></div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-1 rounded">{p.tag}</span>
                <h3 className="mt-3 font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
