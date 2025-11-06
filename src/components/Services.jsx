function Services() {
  const services = [
    {
      title: 'Website Design & Development',
      desc: 'Custom, responsive sites optimized for speed, SEO, and conversions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/></svg>
      ),
    },
    {
      title: 'Web App Development',
      desc: 'Robust, scalable apps with modern APIs and clean UIs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      ),
    },
    {
      title: 'E-commerce & Payments',
      desc: 'From product catalogs to checkout, we build the full flow.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M6 6h15l-1 7H7L6 6z"/><path d="M6 6l-2-2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
      ),
    },
    {
      title: 'Maintenance & Growth',
      desc: 'Ongoing support, analytics and A/B tests to keep you scaling.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M3 3v18h18"/><path d="M7 13l3 3 7-7"/></svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Everything you need to design, launch and grow your digital product.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
