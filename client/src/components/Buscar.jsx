import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alphaOrder, getAllRecipes, getRecipesFromDb, reverseAlphaOrder } from "../actions";
import Page from "./Page";
import PostRecipes from "./PostRecipes";
import image from '../img/error.jpg'

export default function Buscar(){
    
    const RECIPE_PAGE = 9
    const dispatch = useDispatch()
    let array = []
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)

    const [ recipesFinded, setRecipesFinded ] = useState ([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ input, setInput ] = useState({
        
    })
    const [ render, setRender ] = useState(0) //hasta aca
    
    const lastRecipe = currentPage * RECIPE_PAGE
    const firstRecipe = lastRecipe - RECIPE_PAGE
    
    let aux = [...recipesFinded]
    let renderRecipes = aux.slice(firstRecipe, lastRecipe)
    console.log('render sin orden: ', renderRecipes)    
    
    

    
    function handleOnChange(e){
        setInput({[e.target.name]:e.target.value})
        let button = document.getElementById('button')
        let ingreso = document.getElementsByClassName('input')
        button.value=`Buscar por ${e.target.name}`
        button.type =  'submit' 
        switch (e.target.name) {
            case 'name':
                ingreso[1].value = ''
                ingreso[2].value = ''
                break;
            case 'diets':
                ingreso[0].value = ''
                ingreso[2].value = ''
                break;
            case 'healthScore':
                ingreso[0].value = ''
                ingreso[1].value = ''
                break;
            default:
               // console.log('ingreso: ', e.target.name)
                break;
        }
    }
    
    function handleOnSubmit(e){
        e.preventDefault()
        let ingreso = document.getElementsByClassName('input')
        console.log('tipo de ingreso: ', ingreso)

        // dispatch(getRecipesByName(input))
        if(ingreso[0].value){
            console.log('ingresaste: ', ingreso[0].name)
            for(const iterator of recipes)
                if(iterator.name.toLocaleLowerCase().includes(input.name.toLocaleLowerCase()))
                    array.push(iterator)
        }
        else if(ingreso[1].value){
            console.log('ingresaste: ', input.diets.toLocaleLowerCase())
            for (let i = 0; i < recipes.length; i++) 
                for (let j = 0; j < recipes[i].diets.length; j++) {
                    if(recipes[i].diets[j]===input.diets.toLocaleLowerCase())
                        array.push(recipes[i])   
                }
        }
        else if(ingreso[2].value){
            console.log('ingresaste: ', input.healthScore)
            for (const iterator of recipes) {
                if(iterator.healthScore==input.healthScore)
                    array.push(iterator)
            }
        }
        if(array.length===0)
        array = emptyElement()
        
        
        setCurrentPage(1)
        setRecipesFinded([...array])
        console.log('enconrtadas: ',   array)
        e.target[0].value=''
        //if(array.length===0) */
        
    }

    function emptyElement(){

        return ([{
            id: 'error',
            name: 'No se encuentra una receta con ese nombre',
            summary: '',
            healthScore: -1,
            steps: [],
            diets: [],
            image: image
        }])

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

  

    
    function alphaOrderRecipes(e){
    
       let array = [...recipesFinded]
       setRecipesFinded([...array.sort((a, b) => a.name.localeCompare(b.name))])
       console.log('ordenado')
      setCurrentPage(1)      
    }

    function reverseOrder(){
        
       let array = [...recipesFinded]
       setRecipesFinded([...array.reverse((a, b) => a.name.localeCompare(b.name))]) 
       setCurrentPage(1)
        
        
    }

    
    if(recipesFinded.length===0)
    return (
        <div>
                        <h1>Buscar recetas</h1>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                    <label>Ingrese una comida: </label>
                    <input type='text' name='name' pattern="^[A-Za-z]+$" title='Deben ser solo letras' className='input' onChange={handleOnChange}/>
                    <div>

                    <label>Ingrese tipo de dieta: </label>
                    <select name='diets' className='input' onChange={handleOnChange}>
                            <option value=''>Seleccionar</option>
                            {
                                diets.length? diets.map((r, i) => (
                                    <option key = {i} value={r.name}>{r.name}</option>
                                    )): null}
                    </select>
                    </div>

                    <div>
                    <label>Healtscore: </label>
                    <input type='range' name='healthScore' min='0' max='100' className='input' onChange={handleOnChange}/>
                    <label>{input.healthScore}</label>
                    </div>
                    <input type='hidden' name='button' id='button' />
                </div>
            </form>
            <div>
                {input.name}
            </div>
            <div>

            </div>
        
        </div>
    )


console.log('render: ', renderRecipes)
    return (
       <div>
            <button onClick={alphaOrderRecipes}>a-z</button>   
            <button onClick={reverseOrder}>z-a</button> 

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