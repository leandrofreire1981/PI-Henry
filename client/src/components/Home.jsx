import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipes, getRecipesByName, getRecipesFromDb, setRecipeByName } from "../actions"

import image from '../img/error.jpg'
import PostRecipes from "./PostRecipes"
import { useEffect } from "react"
import Page from "./Page"

export default function Home(props) {
    const RECIPE_PAGE = 9
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const [ renderRecipes, setRenderRecipes ] = useState(recipes)
    let first = [...recipes]
    
   
    
    function alphaOrder(e){
        
    
        recipes.sort((a, b) => a.name.localeCompare(b.name));
        setRenderRecipes(recipes.slice(firstRecipe, lastRecipe))
        
        console.log(recipes)
    }

    function reverseOrder(){
        recipes.reverse((a, b) => a.name.localeCompare(b.name));
        setRenderRecipes(recipes.slice(firstRecipe, lastRecipe))
        
    }
  
 
   

  
    
   /*  useEffect(() => {
        console.log('useEffect')
        //dispatch(getAllRecipes(),
       // dispatch(getRecipesFromDb()))
    }, [])
      */
   
   
    

    const [ currentPage, setCurrentPage ] = useState(1)
    const lastRecipe = currentPage * RECIPE_PAGE
    const firstRecipe = lastRecipe - RECIPE_PAGE
    //const renderRecipes = order.slice(firstRecipe, lastRecipe)
    function refresh(ref){
        setCurrentPage(ref)
    }
    
   

    let post = (r, i) => {

        return (<div key={i}> 
        <PostRecipes key={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />    
        </div>)
    }


    return (
        <div>
             <button onClick={alphaOrder}>a-z</button>   
             <button onClick={reverseOrder}>z-a</button>      
                        <h1>Recetas</h1>
                    
            {<Page refresh={refresh} currentPage={currentPage} length={first.length>0? first.length: renderRecipes.length} />}
            <main>
                 {    
                    first.length>0? first.map((r,i) => (post(r,i))): renderRecipes?.map((r, i) => (post(r,i)))
                }              
              </main>
        </div>
    )



}
