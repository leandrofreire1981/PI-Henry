import './App.css';
import Recetas from './components/Recetas';
import { Route } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <h1>Recetas</h1>
      <Route exact path='/recetas' >
        <Recetas />
      </Route>
    </div>
  );
}

export default App;
