import React from 'react'
import { technologies } from '../constants'

const Skills = () => {
  return (
    <section 
      className='c-space my-20'
      id="skills"
    >
      <p 
        className='head-text'
      >
        My Skills
      </p>
      <div className='flex flex-wrap justify-center gap-10 mt-12'>
        {technologies.map((technology)=>(
         <div 
            key={technology.name} 
            className='w-28 h-28 flex flex-col justify-center items-center rounded-md transition ease-in-out duration-300 hover:scale-110 group'
            style = {{backgroundColor:"#222"}}
        >
            <img
                src={technology.icon}
                alt={technology.name}
                className='w-20 h-20 object-contain transition ease-in-out duration-300 group-hover:scale-75 group-hover:mt-2'
            />
            <p 
                className='transition ease-in-out duration-300 text-white-600 mb-4 text-sm hidden group-hover:block'
            >
                {technology.name}
            </p>
         </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
