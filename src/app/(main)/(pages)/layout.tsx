import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="pb-20 h-screen rounded-l-3xl  overflow-scroll ">
      {children}
    </div>
  )
}

export default Layout