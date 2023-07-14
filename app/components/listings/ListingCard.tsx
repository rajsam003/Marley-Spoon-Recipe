"use client"

import { Recipe } from "@/app/types"
import { FC } from "react"
import { useRouter } from "next/navigation"

interface ListingCardProps {
  id: string
  data: Partial<Recipe>
}

const ListingCard: FC<ListingCardProps> = ({ id, data }) => {
  const router = useRouter()
  const { title, photo } = data

  return (
    <div
      onClick={() => router.push(`/recipes/${id}`)}
      className="
        col-span-1 
        cursor-pointer 
        group 
        flex
        shadow-sm
        "
    >
      <div
        className="
        border 
        rounded-lg 
        overflow-hidden
        "
      >
        <img
          src={`https:${photo?.fields.file.url}`}
          alt={title}
          className="w-full h-auto mb-4 "
        />
        <h2
          className="
            text-lg 
            p-2 
            pt-0 
            text-center 
            font-semibold
            "
        >
          {title}
        </h2>
      </div>
    </div>
  )
}

export default ListingCard
