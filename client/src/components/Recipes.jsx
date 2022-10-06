import React from "react"
import { getAllRecipes } from "../actions"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import PostRecipes from './PostRecipes'


export default function Recipes() {
    let recipes  = useSelector(state => state.recipes[0])
    let recipesDb = useSelector(state => state.recipesDb)
    
    //recipesDb = [...recipesDb, ...recipes]
    
      if(recipes) 
        return (
            <div>
                    {
                    recipes?.map(r => (
                        <PostRecipes key={r.id} name={r?.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />
                    ))}
                    {    
                    recipesDb?.map(r => (
                            <PostRecipes key={r.id} name={r?.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets?.map(r => r.name)} steps={r.steps} />    
                    ))}    
            </div>
        )

        return(
            <h1>FATAL ERROR</h1>
        )
}