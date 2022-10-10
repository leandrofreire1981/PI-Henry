import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getRecipesByID, postRecipe } from '../actions'
import style from '../styles/PostRecipes.module.css'

export default function PostRecipes(props) {
   
    const dispatch = useDispatch()
    let mensage = 'Tipo de dieta: '
    let name = 'Nombre: '
    if(!props.diets.length){
        mensage = ''
        name=''
    }
       console.log('id: ', props.id)


    return (
            <NavLink to={`/recipedetail/${props.id}`}  className={style.link}>
       <div className={style.card}>

           <h2>
                    {name} {props.name}
            </h2>
            <img src={props.image} alt='Image not found' /> 
            <h3>{mensage} {props.diets?.map(r => '"' + r + '" ')}
            </h3>
       </div>
      
            </NavLink>
                
    )
}