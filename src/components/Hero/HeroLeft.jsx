import React from 'react'

function HeroLeft() {
  return (
    <div className="flex items-end pl-16 pb-16 w-1/3 bg-amber-700 h-screen">
      <div className='text-3xl uppercase' >Follow Me :</div>
        <a href='https://www.linkedin.com/in/werapat-rommalee-64877a338/' target="_blank" >
        <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
        alt='iconlinkin'
        className='w-[67px] h-[39px]'
        />  
        </a>
        <a href='https://github.com/LONESOME-0?tab=repositories' target="_blank">
        <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        alt='icongithub'
        className='w-[67px] h-[39px]'
        />  
        </a>
        
    </div>
  )
}

export default HeroLeft