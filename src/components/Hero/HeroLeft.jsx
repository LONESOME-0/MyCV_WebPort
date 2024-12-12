import React from 'react'

function HeroLeft() {
  return (
    <div className="flex items-end pl-16 pb-16 w-full h-[30%] xl:w-1/3 bg-amber-700 xl:h-screen">
      <div className='gap-3 items-center hidden xl:flex'> 
        <p className='text-2xl uppercase'>Follow Me :</p>
        <a href='https://www.linkedin.com/in/werapat-rommalee-64877a338/' target="_blank" >
        <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
        alt='iconlinkin'
        className='size-10'
        />  
        </a>
        <a href='https://github.com/LONESOME-0?tab=repositories' target="_blank">
        <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        alt='icongithub'
        className='size-10'
        />  
        </a>
      </div>
    </div>
  )
}

export default HeroLeft