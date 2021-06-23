import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import './components/SearchBar/SearchBar.css';
import FlightList from './components/FlightList/FlightList';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };
  }

  // searchSkyScanner(sortBy) {                       //term, price, 
  //   SkyScanner.searchSkyScanner(sortBy).then((Flights) => {ynforbangyn
  //     this.setState({ flights: flights });
  //   });

  // }
  render() {
    return (
      <div className="App">
        <h1>SKYE</h1>
        <SearchBar searchSkyScanner={this.searchSkyScanner} />
        <FlightList flights={this.state.flights}/>
        
      </div>

    );
  }
}

export default App;
