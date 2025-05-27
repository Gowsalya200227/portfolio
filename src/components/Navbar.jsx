import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-5'}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-secondary">GK<span className="text-xs align-top ml-1">Portfolio</span></a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-darkText hover:text-secondary transition-all duration-300 font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button */}
        <a href="#" className="hidden md:block py-2 px-6 bg-secondary text-white rounded-md hover:bg-accent transition-all duration-300 font-medium">Resume</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-secondary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav>
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-xl text-darkText hover:text-secondary transition-all duration-300 font-medium"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-6">
              <a href="#" className="py-2 px-6 bg-secondary text-white rounded-md hover:bg-accent transition-all duration-300 font-medium">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
