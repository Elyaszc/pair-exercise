

function RecipeCard({mealName, recipeArea, recipeCat, recipeInst, recipeImg}) {
    // const [recipeName, setName] = useState('')
    // const [recipeCat, setCategory] = useState('')
    // const [recipeArea, setArea] = useState('')
    // const [recipeInst, setInstruct] = useState('')
    // const [recipeImg, setImage] = useState('')


    // // setCategory(data.strCategory);
    // // setArea(data.strArea);
    // // setInstruct(data.strInstructions);
    // // setImage(data.strMealThumb);

    console.log(recipeImg)
    return ( 
        <div>
           
            <li>{mealName}</li>
            <li>{recipeArea}</li>
            <li>{recipeCat}</li>
            <li>{recipeInst}</li>
            <img src={recipeImg}></img>
      
        </div>
      
    )

    }
  export default RecipeCard