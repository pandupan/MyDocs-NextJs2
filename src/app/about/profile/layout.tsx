import React from 'react'

const profileLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  )
}

export default profileLayout
