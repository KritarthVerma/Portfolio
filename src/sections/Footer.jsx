import React from 'react'

const Footer = () => {
  return (
    <section 
        className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'
    >
      <div 
        className='text-white-500 flex gap-2'
      >
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div 
        className='flex gap-3'
      >
        <div className='social-icon'>
            <a href="https://github.com/KritarthVerma" className='w-1/2 h-1/2' target = "_blank">
              <img src="/assets/github.svg" alt="github"/>
            </a>
        </div>
        <div className='social-icon'>
            <a href="https://www.linkedin.com/in/kritarthverma" className='w-1/2 h-1/2' target = "_blank">
              <img src="/assets/linkedin.svg" alt="linkedin"/>
            </a>
        </div>
        <div className='social-icon'>
            <a href="https://leetcode.com/u/KritarthVerma/" className='w-1/2 h-1/2' target = "_blank">
              <img src="/assets/leetcode.png" alt="leetcode"/>
            </a>
        </div>
      </div>
      <p 
        className='text-white-500'
      >
        2024 Kritarth. All rights reserved.
      </p>
    </section>
  )
}

export default Footer
