import './App.css';

import { Route } from 'react-router-dom'
import Recipes from './components/Recipes';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllRecipes, getDiets, getRecipesFromDb } from './actions';
import Nav from './components/Nav';
import Recipe from './components/Recipe';
import CreateRecipe from './components/CreateRecipe';





function App() {

  const dispatch = useDispatch()

  useEffect(() => dispatch(getDiets()), [dispatch])
  
  dispatch(getAllRecipes())
 

  useEffect(() => dispatch( getRecipesFromDb()), [dispatch])
  return (
    <div className="App">
      <h1>Recetas</h1>
      <Nav />
      <Route exact path='/home'>
        <Home />
        <Recipe />
      </Route>
      <Route exact path='/recipes' >
          <Recipes />
      </Route>
      <Route exact path='/createrecipes'>
        <CreateRecipe />
      </Route>
    </div>
  );
}

export default App;
