"use client"

import { FC, useEffect, useState } from "react"
import { Recipe } from "@/app/types"
import Container from "@/app/components/Container"
import ReactMarkdown from "react-markdown"
import { FaStar, FaRegStar } from "react-icons/fa"

interface RecipeProps {
  id: string
  data: Partial<Recipe>
}

const Recipe: FC<RecipeProps> = ({ id, data }) => {
  const { title, photo, description, tags, chef } = data
  const [rating, setRating] = useState<number | null>(null)

  useEffect(() => {
    const storedRating = localStorage.getItem(`recipeRating-${id}`)
    if (storedRating) {
      setRating(parseInt(storedRating))
    }
  }, [id])

  const handleRatingChange = (selectedRating: number) => {
    setRating(selectedRating)
    localStorage.setItem(`recipeRating-${id}`, selectedRating.toString())
  }

  return (
    <Container>
      <div
        className="
            grid
            grid-cols-1
            md:px-10
            gap-8"
      >
        <h2
          className="
            text-xl 
            font-semibold 
            "
        >
          {title}
        </h2>
        <img
          src={`https:${photo?.fields.file.url}`}
          alt={title}
          className="w-full md:max-w-2xl h-auto rounded-md"
        />
        <div
          className="
            flex 
            flex-col 
            w-full 
            md:max-w-2xl
            "
        >
          {tags && tags?.length > 0 && (
            <div
              className="
                flex 
                flex-row 
                items-center
                "
            >
              <h2
                className="
                   text-lg 
                   font-semibold 
                   mr-4
                "
              >
                Tags
              </h2>
              {tags?.map((tag, index) => (
                <p
                  key={index}
                  className="
                        border 
                        rounded-lg 
                        p-1  
                        mr-2
                        "
                >
                  {tag.fields.name}
                </p>
              ))}
            </div>
          )}
          <div className="mt-4">
            <ReactMarkdown>{JSON.stringify(description)}</ReactMarkdown>
          </div>
          {chef && (
            <div
              className="
                    flex 
                    flex-row 
                    items-center
                    "
            >
              <h2
                className="
                    text-lg 
                    font-semibold 
                    mr-4
                    "
              >
                Chef
              </h2>
              <p className="">{chef?.fields.name} </p>
            </div>
          )}

          <h2
            className="
                text-lg 
                font-semibold 
                mr-4 
                mt-4
                "
          >
            Ratings
          </h2>
          <div
            className="
                flex 
                items-center
                "
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRatingChange(value)}
                className={`text-yellow-500 ${
                  value <= (rating || 0) ? "fill-current" : "fill-none"
                }`}
              >
                {value <= (rating || 0) ? (
                  <FaStar size={25} />
                ) : (
                  <FaRegStar size={25} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Recipe
