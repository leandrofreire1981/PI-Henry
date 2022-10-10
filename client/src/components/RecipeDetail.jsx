import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clreaState, getRecipesByID } from "../actions"
import imgLoading from '../img/simpsons.gif'
import style from '../styles/RecipeDetail.module.css'

export default function RecipeDetail(){
    const { id }= useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(clreaState())
        dispatch(getRecipesByID(id))
    
    },[])
    
    const recipe = useSelector(state => state.recipe)
    if(!!!recipe.created){
        recipe.name = recipe.title
    }
    
    

    if(!recipe.image){
        return(<div>
            <img src={imgLoading} alt='not found'/>
        </div>)
    }
    else
    return (
        <div>
           <h1>{recipe.name}</h1>
           <div>Healtscore: {recipe.healthScore}</div> 
           <div>Resumen: {recipe.summary?.replace(/<[^>]*>?/g, "")}</div>
           <div>Tipo de dieta:
            <div>
                 {recipe.diets?.map((r, i) => (
                         <p key={i}>{r.name}</p>))} 
            </div>
           </div>
           <div>Paso para cocinar:
            <div>
                 {recipe.steps?.map((r, i) => (
                         <p>{r}</p>))} 
            </div>
           </div>
           <img src={recipe.image} alt='not found' />
        </div>
    )
}