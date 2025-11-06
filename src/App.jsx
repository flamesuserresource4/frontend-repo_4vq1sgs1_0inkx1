import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Chez Guizou. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#work" className="hover:text-blue-600">Work</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
