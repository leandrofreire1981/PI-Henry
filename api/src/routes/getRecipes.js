require('dotenv').config();

const { default: axios } = require('axios');
const { api_key } = process.env


async function recipesRouter(req, res, next) {
    const { name } = req.query
    try {
       const recipes = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${api_key}&addRecipeInformation=true`)
       //const recipes = await axios(`http://localhost:3003/${name}`) // resultados del archivo ../respuestas de api/api.js
       if(recipes.data.totalResults === 0)
            res.status(204).json({error: 'no hay recetas'})
        else {
         res.status(200).json(recipes.data.results)
    }
        
    }catch(e) {next(e)}
}


module.exports = {
    recipesRouter
}