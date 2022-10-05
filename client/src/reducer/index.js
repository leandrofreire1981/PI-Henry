import { GET_ALL_RECIPES, GET_RECIPES_BY_NAME } from "../actions/const";



const initialState = {
    recipe: [],
    recipes: []
}

export default function rootReducer(state = initialState, action){

    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state, recipes: [...state.recipes, action.payload]
            }
        
        case GET_RECIPES_BY_NAME:
            return {
                ...state, recipe: action.payload
            }
            
            
        
    
        default:
            break;
    }
    
}