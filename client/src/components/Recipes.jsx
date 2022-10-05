import React from "react"
import { getAllRecipes } from "../actions"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import PostRecipes from './PostRecipes'

export default function Recipes() {
    const recipes  = useSelector(state => state.recipes)


/*    const  dispatch = useDispatch()
   useEffect(()=>{         
    console.log("useEffect andando")        
      dispatch(getAllRecipes())
      },[]); */

     
      console.log('array recipes: ', recipes[0]) 
     
     
     
      if(recipes) 
        return (
            <div>
                <h1>Lista de Recetas</h1>
                    {
                    recipes[0]?.map(r => (
                       <>
                       <PostRecipes key={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={[...r.diets]} steps={r.steps} />
                       </> 
                ))}    
                 {/*   <PostRecipes key={recipes[0].id} recipes={recipes[0]} />
                   <PostRecipes key={recipes[1].id} recipes={recipes[1]} />
                    <PostRecipes key={recipes[2].id} recipes={recipes[2]} /> */}
        
            </div>
        )

        return(
            <h1>FATAL ERROR</h1>
        )
}