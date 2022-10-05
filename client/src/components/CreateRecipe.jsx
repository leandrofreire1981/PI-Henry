import { useState } from "react"

export default function CreateRecipe(){

    const [input, setInput ] = useState({
        name: '',
        summary: '',
        healtScore: '',
        step: []
    })

    function handleOnChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function handleOnStep(e){
        setInput({...input, step: [...input.step, e.target.form[3].value]})
        e.target.form[3].value = ''
        e.target.form[3].focus()
    }

    return (
        <>
            Crear una Receta
            <form >
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
                    <input type='range' name='healtScore' min={1} max={100} onChange={handleOnChange} />
                </div>
                <div>
                    <label>Pasos a seguir: </label>
                    <input type='text' name='step'  />
                    <input type='button' name='addStep' value='Agregar Paso' onClick={handleOnStep} />
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
                    <label>{input.healtScore}</label>
                    </div>
                    <div>{ input.step?.map((r, i) => (
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

