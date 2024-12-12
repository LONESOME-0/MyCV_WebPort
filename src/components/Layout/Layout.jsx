import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <div className="flex flex-col bg-neutral-800 h-screen relative xl:items-center xl:flex-row"> {children} </div> 
    </>
  )
}

export default Layout
{/* <div className="flex w-1/3 bg-amber-700 h-screen"></div>
<div className="flex w-2/3 bg-neutral-800 text-white"></div> */}