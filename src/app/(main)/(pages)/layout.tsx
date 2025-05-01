import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="pb-20 h-screen rounded-l-3xl  overflow-scroll ">
      {props.children}
    </div>
  )
}

export default Layout