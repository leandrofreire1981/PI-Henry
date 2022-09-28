require('dotenv').config();

const { default: axios } = require('axios');
const { api_key } = process.env


async function idRecipesRouter(req, res, next){
    const { idReceta } = req.params
    try {
        const recipes = await axios(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${api_key}`)
        res.status(200).json(recipes)
    }catch (e) {
        next(e)
    }
}

module.exports = {
    idRecipesRouter
}