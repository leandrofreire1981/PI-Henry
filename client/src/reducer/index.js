import { GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_BY_DB, SET_RECIPES_BY_NAME } from "../actions/const";



const initialState = {
    recipesDb: [],
    diets : {},
    recipe: [],
    recipes: []
}

export default function rootReducer(state = initialState, action){

    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state, recipes: [...state.recipes, action.payload]
            }
        
        case SET_RECIPES_BY_NAME:
            return {
                ...state, recipe: action.payload
            }

        case GET_DIETS:
            return {
                ...state, diets: action.payload
            }
            
        case GET_RECIPE_BY_DB:
            return {
                ...state, recipesDb: [...action.payload]
            } 
            
        
    
        default:
            break;
    }
    
}