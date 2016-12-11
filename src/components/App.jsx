import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import TicketItem from './TicketItem';

class App extends Component {
  static propTypes = {
    origin: PropTypes.string,
    destination: PropTypes.string,
    airports: PropTypes.array.isRequired,
    fetchAirports: PropTypes.func.isRequired,
    onChooseAirport: PropTypes.func.isRequired,
    tickets: PropTypes.array,
    fetchTickets: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchAirports();
  }
  /* eslint-disable no-unused-vars */
  componentWillUpdate(nextProps, nextState) {
    let originAndDestinationSelected = nextProps.origin && nextProps.destination;
    let selectionHasChangedSinceLastUpdate = nextProps.origin !== this.props.origin ||
                                             nextProps.destination !== this.props.destination;
    if (originAndDestinationSelected && selectionHasChangedSinceLastUpdate) {
      this.props.fetchTickets(nextProps.origin, nextProps.destination);
    }
  }
  render() {
    let ticketList = this.props.tickets.map(ticket =>
      <TicketItem key={ticket.id} ticket={ticket} />
    );
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
        <div>
          {ticketList}
        </div>
      </div>
    );
  }
}

export default App;
