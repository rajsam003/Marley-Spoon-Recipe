import Container from "./components/Container"
import ListingCard from "./components/listings/ListingCard"
import { client } from "./utils/contentful"

const Home = async () => {
  const recipes = await client.getEntries({ content_type: "recipe" })

  return (
    <main>
      <Container>
        <h1
          className="
            text-2xl 
            text-center 
            font-bold 
            mb-4
            "
        >
          Marley Spoon Recipes
        </h1>
        <div
          className="
            pt-5
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
            "
        >
          {recipes?.items.map((recipe) => (
            <ListingCard
              key={recipe.sys.id}
              id={recipe.sys.id}
              data={recipe.fields}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default Home
