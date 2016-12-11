import { connect } from 'react-redux';
import App from './App';
import AirportActionCreators from '../actions/AirportActionCreators';

const mapStateToProps = (state) => (
  {
    airports: state.airports.map(airport => ({
      value: airport.code,
      label: `${airport.city} - ${airport.country} (${airport.code})`
    })),
    origin: state.route.origin,
    destination: state.route.destination
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchAirports() {
      dispatch(AirportActionCreators.fetchAirports());
    },
    onChooseAirport(target, airport) {
      dispatch(AirportActionCreators.chooseAirport(target, airport));
    }
  }
);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
