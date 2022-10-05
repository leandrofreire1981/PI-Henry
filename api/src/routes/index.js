require('dotenv').config();

const { Recipe, Diet } = require('../db.js')
const { default: axios } = require('axios');
const { Router } = require('express');
const { api_key } = process.env
const { recipesRouter } = require('./routesFunctions/getRecipes.js')
const { idRecipesRouter } = require('./routesFunctions/getIdRecipes.js')
const { postRecipeRouter } = require('./routesFunctions/postRecipeRouter.js')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// api key apiKey=77de3ab4cae247c18ad5b08274904546

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', recipesRouter)

router.get('/recipes/:idReceta', idRecipesRouter)

router.post('/post', postRecipeRouter)

router.get('/diets', async (req, res, next) => {
    
    try{
        //const recipes = await axios(`https://api.spoonacular.com/recipes/complexSearch?number=100apiKey=${api_key}&addRecipeInformation=true`)
        const recipes = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&number=100`)
        res.status(200).json(recipes)
    }catch(e){
        res.status(404).json({err: 'not finded'})
    }
})




/* 
[ ] GET /diets:
Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno, deberán 
precargar la base de datos con los tipos de datos indicados por spoonacular acá */

module.exports = router;



