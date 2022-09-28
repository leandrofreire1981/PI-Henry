require('dotenv').config();

const { default: axios } = require('axios');
const { Router } = require('express');
const { api_key } = process.env
const { recipesRouter } = require('./')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// api key apiKey=77de3ab4cae247c18ad5b08274904546

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', recipesRouter)

router.get('/recipes/:idReceta', getIdRecipes)


/* router.get('/post', (req, res) => {

})
 */



module.exports = router;


