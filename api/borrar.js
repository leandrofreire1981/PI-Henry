const axios = require('axios')

async function get(name) {
    try{
       // const recipes = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=77de3ab4cae247c18ad5b08274904546`)
       const recipes = await axios(`http://localhost:3002/${name}`)
    if(recipes.data.totalResults === 0)
        console.log('no hay recetas')
    else {
        console.log(recipes)
    }
    }catch(e){
        console.log(e)
    }

}

get('')