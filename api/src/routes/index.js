const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', async (req, res) => {
    const { name } = req.query
    try {
       //const recipes = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=77de3ab4cae247c18ad5b08274904546`)
       const recipes = await axios(`http://localhost:3003/${name}`) // resultados del archivo ../respuestas de api/api.js
       if(recipes.data.totalResults === 0)
            res.status(204).json({error: 'no hay recetas'})
        else {
         res.status(200).json(recipes.data.results)
    }
        
    }catch(e) {
        console.log(e)
    }
})

//router.post('/recipes', (req, res) => {})

module.exports = router;


/* [ ] GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado */