import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "Circuit Design", level: 85 },
        { name: "Signal Processing", level: 80 },
        { name: "Telecom Systems", level: 90 },
        { name: "Wireless Networks", level: 85 },
      ]
    },
    {
      title: "Software Skills",
      skills: [
        { name: "MATLAB", level: 80 },
        { name: "PCB Design", level: 75 },
        { name: "C/C++", level: 70 },
        { name: "Python", level: 65 },
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Collaboration", level: 85 },
        { name: "Technical Writing", level: 80 },
        { name: "Project Management", level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-tertiary">
      <div className="container">
        <h2 className="section-title">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-highlight hover:border-accent">
              <h3 className="text-lg font-semibold text-secondary mb-3">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-darkText">{skill.name}</span>
                      <span className="text-secondary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-tertiary rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
