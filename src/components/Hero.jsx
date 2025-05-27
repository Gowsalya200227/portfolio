import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 md:pt-20 pb-8 md:pb-16 bg-gradient-to-b from-tertiary to-primary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-3">
              Gowsalya Kumaravel
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-lightText mb-4">
              Electrical & Electronics Engineer
            </h2>
            <p className="text-base mb-6 text-darkText">
              Electrical engineering student at University of Jaffna, specializing in telecommunications. 
              Seeking internship opportunities in the telecom sector.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#projects" className="btn btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent shadow-md">
              <img 
                src="/images/profile.svg" 
                alt="Gowsalya Kumaravel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
