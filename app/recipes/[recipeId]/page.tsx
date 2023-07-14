import { client } from "@/app/utils/contentful"
import Recipe from "./Recipe"
import EmptyState from "@/app/components/EmptyState"

interface IParams {
  recipeId?: string
}

const RecipePage = async ({ params }: { params: IParams }) => {
  const recipe = await client.getEntry(params.recipeId!)

  if (!recipe) {
    return <EmptyState />
  }

  return <Recipe data={recipe.fields} id={params.recipeId!} />
}

export default RecipePage
