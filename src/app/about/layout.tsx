import React from 'react'

const AboutLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <nav className="fixed right-0 top-[40px] z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white p-5 space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  )
}

export default AboutLayout
