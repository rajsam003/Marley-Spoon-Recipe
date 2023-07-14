"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"

interface EmptyStateProps {
  title?: string
}

const EmptyState: FC<EmptyStateProps> = ({ title = "No exact matches" }) => {
  const router = useRouter()

  return (
    <div
      className="
            h-[60vh]
            flex
            flex-col
            gap-2
            justify-center
            items-center
        "
    >
      <h1
        className="
          text-2xl 
          text-gray-700 
          font-bold
          "
      >
        {title}
      </h1>
      <button
        className="
          border 
          rounded 
        text-gray-700 
          text-center 
          mt-4 
          p-2 
          cursor-pointer
          "
        onClick={() => router.push("/")}
      >
        Go To Home Page
      </button>
    </div>
  )
}

export default EmptyState
