import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipes, getRecipesFromDb, postRecipe } from "../actions"

export default function CreateRecipe(){

    const dispatch = useDispatch()

    const diets = useSelector(state => state.diets)
     

    const [input, setInput ] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        step: [],
        diet: []        
    })



    function handleOnChange(e){
     if(/^[a-zA-Z0-9.]/.test(e.target.value))
        setInput({...input, [e.target.name]: e.target.value})
         if(input.name && input.summary && input.diet.length) 
            e.target.form[7].type = 'submit'
        console.log(e.target.form[3].value)
    }

    function handleOnSelect(e){
        setInput({...input, diet: [...input.diet, e.target.form[3].value]})
        if(input.name && input.summary && e.target.form[3].value) 
            e.target.form[7].type = 'submit'
    }

    function handleOnStep(e){
        setInput({...input, step: [...input.step, e.target.form[4].value]})
        e.target.form[4].value = ''
        e.target.form[4].focus()
        if(input.name && input.summary && input.diet.length) 
            e.target.form[7].type = 'submit'
    }

    function handleOnSubmit(e){
        
        e.preventDefault()
        console.log('targete' ,e.target[0])
        postRecipe(input)
        e.target.form = [...e.target]
        handleOnClear(e)
      //  dispatch( getRecipesFromDb(dispatch))
//dispatch(getAllRecipes())
        
    }

    function handleOnClear(e){
        for(let i=0; i<5; i++)
            e.target.form[i].value = '' 
        setInput({
            name: '',
            summary: '',
            healthScore: 0,
            step: [],
            diet: []
        })
        e.target.form[7].type = 'hidden'
     }

    return (
        <>
            <h3>Crear una Receta</h3>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type='text' name='name' pattern="^[A-Za-z]+$" onChange={handleOnChange} />
                </div>
                <div>
                    <label>Resumen del plato: </label>
                    <textarea type='text' name='summary' pattern="^[A-Za-z0-9]+$" onChange={handleOnChange} />
                </div>
                <div>
                    <label>Nivel de "comida saludable": </label>
                    <input type='range' name='healthScore' min={1} max={100} onChange={handleOnChange} />
                    <label>{input.healthScore}</label>
                </div>
                    <div> 
                        <label>Tipos de dietas: </label>
                        <select name='diets' onChange={handleOnSelect}>
                            <option value=''>Seleccionar</option>
                            {
                            diets.length? diets.map((r, i) => (
                                <option key = {i} value={r.name}>{r.name}</option>
                            )): null}
                    </select>
                    </div>
                <div>
                    <label>Pasos a seguir: </label>
                    <input type='text' name='step'  />
                    <input type='button' name='addStep' value='Agregar Paso' onClick={handleOnStep} />
                </div>
                <div>
                    <input type='button' name='clear' value='Borrar' onClick={handleOnClear} />
                    
                </div>
                <div>
                    <input type='hidden' name='submitRecipe' value='Almacenar' />
                </div>
                <div>
                    <h3>Vista preliminar</h3>
                    <div>
                    <label>{input.name}</label>
                    </div>
                    <div>
                    <label>{input.summary}</label>
                    </div>
                    <div>
                    <label>{input.healthScore}</label>
                    </div>
                    <div>Dietas:
                        {input.diet?.map((r, i) => (
                            <div key={i}>{i + 1}-{ r }</div>
                        ))}
                    </div>
                    <div>Pasos:
                        { input.step?.map((r, i) => (
                        <div key={i}>Paso {i + 1}: {r}</div> 
                        ))}
                    </div>
  
                </div>
            </form>
        </>
    )
}


