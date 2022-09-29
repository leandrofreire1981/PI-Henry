const { Recipe, Diet } = require('../../db.js')

async function createRecipe(name, summary, healthScore, instructions, img, dietTypes){
    if(!name || !summary ) throw Error('Missing Parameters')
    let newRecipe = await Recipe.create({
        name, 
        summary, 
        healthScore, 
        instructions, 
        img,
        dietTypes
    })
    let diets = await Diet.findAll({
        where: {name: dietTypes}
    })
    newRecipe.addRecipe(diets)
    return newRecipe
} 

module.exports = {
    createRecipe
}