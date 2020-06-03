import React,{Component} from 'react';


const API_KEY = 'f211df03';

class SearchForm extends Component {

  state = {
    inputMovie: ''
  }

  handleCahnge = (e) => {
    this.setState({inputMovie: e.target.value})

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {inputMovie} = this.state;
    
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results =>{ 
        console.log(results);
        const {Search, totalResults} = results
        this.props.onResults(Search)
      })
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input"
              onChange = {this.handleCahnge} 
              type="text" 
              placeholder="Busca una película..."
            />
          </div>
          <div className="control">
            <button 
              className="button is-info"> Buscar
            </button>
          </div>
        </div>
      </form>
    )
  }
}
 
export default SearchForm;