import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Smart Energy Monitoring System",
      description: "IoT-based energy monitoring system tracking power consumption in real-time, providing insights for energy optimization.",
      image: "/images/project1.svg",
      technologies: ["Arduino", "IoT", "Power Electronics", "Cloud"],
      link: "#"
    },
    {
      title: "Wireless Communication Network",
      description: "Wireless network design focusing on coverage optimization, interference management, and quality of service.",
      image: "/images/project2.svg",
      technologies: ["RF Planning", "Network Simulation", "MATLAB"],
      link: "#"
    },
    {
      title: "Automated Control System",
      description: "Control system for industrial processes using sensors and actuators to improve efficiency and safety.",
      image: "/images/project3.svg",
      technologies: ["PLC", "SCADA", "Sensors", "Control Theory"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-tertiary">
      <div className="container">
        <h2 className="section-title">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Floating Tech Pills */}
                <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1 max-w-[80%]">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-0.5 bg-white/90 text-secondary rounded-full text-xs font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-0.5 bg-white/90 text-secondary rounded-full text-xs font-medium shadow-sm">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-lightText text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Bottom Action */}
                <div className="mt-auto pt-4 border-t border-highlight">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-secondary group-hover:text-accent transition-colors duration-300 text-sm font-medium"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
