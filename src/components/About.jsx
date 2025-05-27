import React from 'react'

const About = () => {
  return (
    <section id="about" className="pt-0 md:pt-16 pb-16 md:pb-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto text-darkText">
          <p className="mb-4">
            Final year Electrical and Electronics Engineering student at University of Jaffna, 
            specializing in telecommunications. Strong foundation in circuit design, signal processing, 
            and wireless communication systems.
          </p>
          
          <p className="mb-4">
            Experience in designing electronic circuits, working with microcontrollers, 
            and analyzing telecommunication networks. Interested in IoT and 5G technologies.
          </p>
          
          <p>
            Seeking internship opportunities in the telecommunications sector to apply technical knowledge 
            and problem-solving abilities in innovative projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
