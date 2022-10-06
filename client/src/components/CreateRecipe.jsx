import { useState } from "react"
import { useSelector } from "react-redux"
import { postRecipe } from "../actions"

export default function CreateRecipe(){

    const diets = useSelector(state => state.diets)

    const [input, setInput ] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        step: [],
        diet: []        
    })

    function handleOnChange(e){
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
        console.log(input)
        postRecipe(input)
        console.log('receta almacenada')
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
                    <input type='text' name='name' onChange={handleOnChange} />
                </div>
                <div>
                    <label>Resumen del plato: </label>
                    <textarea type='text' name='summary' onChange={handleOnChange} />
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
                            {diets?.map((r, i) => (
                                <option key = {i} value={r.name}>{r.name}</option>
                            ))}
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


/* Ruta de creación de recetas: debe contener

[ ] Un formulario controlado con JavaScript con los siguientes campos:
Nombre
Resumen del plato
Nivel de "comida saludable" (health score)
Paso a paso
[ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
[ ] Botón/Opción para crear una nueva receta
Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la receta no pueda contener símbolos, que el health score no pueda exceder determinado valor, etc. */

