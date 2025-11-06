import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Let’s build something great</h2>
            <p className="mt-3 text-gray-600">Tell us about your project and goals. We’ll respond within one business day.</p>
            <div className="mt-6 rounded-xl border border-gray-200 p-5 bg-gray-50">
              <p className="text-sm text-gray-700">Email</p>
              <a href="mailto:hello@chezguizou.com" className="text-blue-600 font-semibold">hello@chezguizou.com</a>
              <p className="mt-3 text-sm text-gray-700">Location</p>
              <p className="text-gray-900 font-medium">Remote • Worldwide</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600">
                  <option>Under $2k</option>
                  <option>$2k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Project details</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" placeholder="Tell us about your goals and timeline" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">Send message</button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
