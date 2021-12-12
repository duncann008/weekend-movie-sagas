import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
        
        <Route exact path="/AddMovie">
          <AddMovie />
        </Route>
        <Route exact path="/Details">
          <Details />
        </Route>
        
      </Router>
    </div>
  );
}


export default App;
