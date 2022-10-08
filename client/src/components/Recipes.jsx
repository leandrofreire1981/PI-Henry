import React from "react"
import { getAllRecipes, getRecipesFromDb } from "../actions"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import PostRecipes from './PostRecipes'


export default function Recipes() {
    let recipes  = useSelector(state => state.recipes[0])
let recipesDb = useSelector(state => state.recipesDb)
    //const dispatch = useDispatch
    //useEffect(() => getRecipesFromDb(), [])
    
      if(recipes.length && recipesDb.length) 
        return (
            <div>
                    {    
                    recipesDb?.map(r => (
                            <PostRecipes key={r.id} name={r?.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets?.map(r => r.name)} steps={r.steps} />    
                    ))}    
                    {
                    recipes?.map(r => (
                        <PostRecipes key={r.id} name={r?.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />
                    ))}
            </div>
        )

        return(
            <h1>FATAL ERROR</h1>
        )
}