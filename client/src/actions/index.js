import { GET_RECIPES_BY_NAME, GET_ALL_RECIPES } from "./const"



export function getAllRecipes() {

   return function(dispatch) {
        //fetch(`http://localhost:5000/recipes`)
        fetch('http://localhost:3003')
            .then(r => r.json())
            .then(r => {
                console.log('lo que llega', r)   
                dispatch({
                    type: GET_ALL_RECIPES,
                    payload: r
                }) }
            ).catch(e => {
                console.log('Hubo error: ', e)
            })
    }   
}

export function getRecipesByName(name) {

    return function(dispatch) {
         //fetch(`http://localhost:5000/recipes`)
         fetch(`http://localhost:3003/${name}`)
             .then(r => r.json())
             .then(r => {
                 console.log('lo que llega', r)   
                 dispatch({
                     type: GET_RECIPES_BY_NAME,
                     payload: r.results
                 }) }
             ).catch(e => {
                 console.log('Hubo error: ', e)
             })
     }   
 }

 export function setRecipeByName(array, dispatch){
    
    return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: [...array]
    })
 }





        