import { useEffect } from "react"
import { useState } from "react"
import RecipeCard from "./RecipeCard"

function RecipePage() {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(resp => resp.json())
            .then(data => setRecipe(data.meals))
    }, [])


    return ( 
        <div>
            <h1 className="bg-slate-400">Recipe</h1>
            {recipe.map(recipe => <RecipeCard 
            key={recipe.name} 
            mealName={recipe.strMeal} 
            recipeCat= {recipe.strCategory} 
            recipeArea={recipe.strArea} 
            recipeInst={recipe.strInstructions} 
            recipeImg={recipe.strMealThumb} 
            />)}
       
        </div>
      
    )

    }
  export default RecipePage