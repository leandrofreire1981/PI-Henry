let express = require('express')
let fs = require('fs')

let app = express()

let puerto = 3003



app.get('/', (req, res) =>{
    res.status(201).json({
        "results": [ ],
        "offset": 0,
        "number": 10,
        "totalResults": 0
        })
})

app.get('/uva', (req, res) => {
    res.status(200).json({
        "results": [
        {
        "id": 654396,
        "title": "Pan Con L'uva",
        "image": "https://spoonacular.com/recipeImages/654396-312x231.jpg",
        "imageType": "jpg"
        }
        ],
        "offset": 0,
        "number": 10,
        "totalResults": 1
        })
})

app.get('/pasta', (req, res) => {
    res.status(200).json({
        "results": [
        {
        "id": 654959,
        "title": "Pasta With Tuna",
        "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 511728,
        "title": "Pasta Margherita",
        "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654812,
        "title": "Pasta and Seafood",
        "image": "https://spoonacular.com/recipeImages/654812-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654857,
        "title": "Pasta On The Border",
        "image": "https://spoonacular.com/recipeImages/654857-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654883,
        "title": "Pasta Vegetable Soup",
        "image": "https://spoonacular.com/recipeImages/654883-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654928,
        "title": "Pasta With Italian Sausage",
        "image": "https://spoonacular.com/recipeImages/654928-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654926,
        "title": "Pasta With Gorgonzola Sauce",
        "image": "https://spoonacular.com/recipeImages/654926-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654944,
        "title": "Pasta With Salmon Cream Sauce",
        "image": "https://spoonacular.com/recipeImages/654944-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654905,
        "title": "Pasta With Chickpeas and Kale",
        "image": "https://spoonacular.com/recipeImages/654905-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 654901,
        "title": "Pasta With Chicken and Broccoli",
        "image": "https://spoonacular.com/recipeImages/654901-312x231.jpg",
        "imageType": "jpg"
        }
        ],
        "offset": 0,
        "number": 10,
        "totalResults": 223
        })
    

})

app.listen(puerto, () => {
    console.log(`Escuchando api local en puerto: ${puerto}`)
})