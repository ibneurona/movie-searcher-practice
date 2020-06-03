import React,{useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';
import Movie from './components/Movie';

function App() {
  const [results, setResults] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const _handleResults = (results) => {
    setResults(results);
    setIsActive(true);
  };

  const _renderResults = () => {
    return( 
      results === undefined ? //deberia ser coherente en el tipo de dato
      <p>Sin resultados <span>😵 😰</span></p> :
      results.map((mov) => {
        return (
          <div className="movie-list" key={mov.imdbID}>
            <Movie
              title={mov.Title}
              poster={mov.Poster}
              year={mov.Year}
            />
          </div>
        )
      })
    )
  }

  return (
    <div className="App">
      <Title>Movie Searcher</Title>
      <div className="search-wrapper">
        <SearchForm 
          onResults={_handleResults}
        />
      </div>
      {isActive ? _renderResults():<small>Usa el buscador y encuentra una película</small>}
    </div>
  );
}

export default App;
