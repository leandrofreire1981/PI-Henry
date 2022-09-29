const { Recipe, Diet } = require('../../db.js')
const { createRecipe } = require('./createRecipe.js')

async function postRecipeRouter(req, res, next){
    const { name, summary, healthScore, instructions, img, dietTypes } = req.body
    try {
        res.status(200).json(await createRecipe(name, summary, healthScore, instructions, img, dietTypes))
    }catch(e) {
        next(e)
    }
} 


module.exports = {
    postRecipeRouter
}