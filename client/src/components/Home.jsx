import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipesByName, setRecipeByName } from "../actions"
import Recipe from "./Recipe"
import image from '../img/error.jpg'

export default function Home() {

    const dispatch = useDispatch()

    const recipes = useSelector(state => state.recipes[0])

    const [input, setInput ] = useState('')

    function handleOnChange(e){
        setInput(e.target.value)
    }

    function handleOnSubmit(e){
        e.preventDefault()
        let array = []
       // dispatch(getRecipesByName(input))
       for(const iterator of recipes)
            if(iterator.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
                    array.push(iterator)
        if(!array.length) 
            array.push({
                id: 'error',
                name: 'No se encuentra una receta con ese nombre',
                summary: '',
                healthScore: -1,
                steps: [],
                diets: [],
                image: image
            }) 

        setRecipeByName(array, dispatch)
        e.target[0].value=''
    }

    return (
        <div>Home
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Ingrese una comida: </label>
                    <input type='text' name='name' onChange={handleOnChange}/>
                </div>
            </form>
        </div>
    )
}