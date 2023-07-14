import React, { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        w-full 
        h-full 
        flex
        flex-col
        py-10 
        px-5 
        text-gray-700
        "
    >
      {children}
    </div>
  )
}

export default Container
