import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <div className="flex h-screen">
          <div className="flex w-1/3 bg-amber-700 h-screen"></div>
          <div className="flex w-2/3 bg-neutral-800 text-white"></div>
    </div>  
    </>
  )
}

export default Layout