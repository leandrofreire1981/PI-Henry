import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getRecipesFromDb } from "../actions";
import Page from "./Page";
import PostRecipes from "./PostRecipes";
import image from '../img/error.jpg'

export default function Buscar(){
    
    const RECIPE_PAGE = 9
    const dispatch = useDispatch()

    const recipes = useSelector(state => state.recipes)

    const [ recipesFinded, setRecipesFinded ] = useState ([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [input, setInput ] = useState('')

   
        
    
    
    
    useEffect(() => {
        console.log('useEffect')
        dispatch(getAllRecipes(),
        dispatch(getRecipesFromDb()))
    }, [])
    
    function handleOnChange(e){
        setInput({...input, ['name']:e.target.value})
        
    }
    
    function handleOnSubmit(e){
        e.preventDefault()
        let array = []
        // dispatch(getRecipesByName(input))
        for(const iterator of recipes)
        if(iterator.name.toLocaleLowerCase().includes(input.name.toLocaleLowerCase()))
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
        setRecipesFinded(array)
        
        
        
        setCurrentPage(1)
        console.log(array)
        e.target[0].value=''
    }
    
    function refresh(ref){
        setCurrentPage(ref)
    }
    
    function handleOnRefresh(e){
        e.preventDefault()
        setRecipesFinded([])
        setCurrentPage(1)
        setInput('')

    }

  
    const lastRecipe = currentPage * RECIPE_PAGE
    const firstRecipe = lastRecipe - RECIPE_PAGE
    
    
    let renderRecipes = recipesFinded.slice(firstRecipe, lastRecipe)
    
    
    if(recipesFinded.length===0)
    return (
        <div>
                        <h1>Buscar recetas</h1>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                    <label>Ingrese una comida: </label>
                    <input type='text' name='name' onChange={handleOnChange}/>
                </div>
            </form>
        
        </div>
    )
    return (
       <div>
        <h1>{recipesFinded[0].id === 'error'? recipesFinded[0].id: <p>Recetas encontradas</p> }</h1>
        <button onClick={handleOnRefresh}>Borrar Busqueda</button>
        {<Page refresh={refresh} currentPage={currentPage} length={recipesFinded.length} />}
        <main>
        {    
           renderRecipes?.map((r, i) => (
                 <div key={i}> 
                    <PostRecipes key={r.id} name={r.name} summary={r.summary} healthScore={r.healthScore} image={r.image} diets={r.diets} steps={r.steps} />    
                 </div>
     ))} 
     
     </main>
    
     </div>
    )

}