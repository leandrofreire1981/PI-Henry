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
import Buscar from './components/Buscar';
import RecipeDetail from './components/RecipeDetail';
import LandingPage from './components/LandingPage';







function App() {

  const dispatch = useDispatch()

  //useEffect(() => dispatch(getDiets()), [dispatch])
  
 dispatch(getAllRecipes())
  dispatch(getDiets())
  dispatch(getRecipesFromDb())
  //useEffect(() => dispatch( getRecipesFromDb(dispatch)), [dispatch])
  return (
    <div className="App">
   
    
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route exact path='/home'>
        <Nav />
        <Home />
      {/*   <Recipe /> */}
      </Route>
      <Route exact path='/recipes' >
       {/*    <Recipes /> */}
      </Route>
      <Route exact path='/createrecipes'>
        <Nav />
        <CreateRecipe />
      </Route>
      <Route exact path='/buscar'>
        <Nav />
        <Buscar/>
      </Route>
      <Route exact path={`/recipedetail/:id`}>
        <Nav />
        <RecipeDetail/>
      </Route>
    </div>
  );
}

export default App;
