import React from 'react'

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Electrical and Electronics Engineering",
      institution: "University of Jaffna",
      period: "2020 - Present",
      description: "Specializing in Telecommunications with focus on wireless systems and networks."
    },
    {
      degree: "Advanced Level Certificate",
      institution: "High School",
      period: "2018 - 2020",
      description: "Mathematics, Physics, and Chemistry with distinction."
    }
  ]

  const courses = [
    "Wireless Communication",
    "Signal Processing",
    "RF Design",
    "Network Protocols",
    "Microwave Engineering",
    "Antenna Design"
  ]

  return (
    <section id="education" className="section-padding bg-tertiary">
      <div className="container">
        <h2 className="section-title">
          Education
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-highlight hover:border-accent mb-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-secondary">{item.degree}</h3>
                    <span className="text-white px-2 py-1 rounded bg-secondary text-sm">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg mb-2">{item.institution}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-highlight hover:border-accent h-full">
              <h3 className="text-lg font-semibold text-secondary mb-3">Relevant Coursework</h3>
              <ul className="space-y-2">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">▹</span>
                    <span className="text-darkText">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
