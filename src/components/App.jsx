import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

class App extends Component {
  static propTypes = {
    origin: PropTypes.string,
    destination: PropTypes.string,
    airports: PropTypes.array.isRequired,
    fetchAirports: PropTypes.func.isRequired,
    onChooseAirport: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchAirports();
  }
  render() {
    return (
      <div>
        <header>
          <div className="header-brand">
            <img src="http://placekitten.com/35/35" height="35" alt="kitty" />
            <p>Check discount ticket prices and pay using your AirCheap points</p>
          </div>
          <div className="header-route">
            <Select
              name="origin"
              value={this.props.origin}
              options={this.props.airports}
              onChange={this.props.onChooseAirport.bind(this, 'origin')}
            />
            <Select
              name="destination"
              value={this.props.destination}
              options={this.props.airports}
              onChange={this.props.onChooseAirport.bind(this, 'destination')}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
