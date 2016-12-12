import
{ REQUEST_AIRPORTS,
  RECEIVE_AIRPORTS,
  CHOOSE_AIRPORT,
  REQUEST_TICKETS,
  RECEIVE_TICKETS
} from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

  /* eslint-disable no-unused-vars */
const AirportActionCreators = {
  // Thunk Action creator
  fetchAirports(origin, destination) {
    return (dispatch) => {
      dispatch({ type: REQUEST_AIRPORTS });
      AirCheapAPI.fetchAirports().then(
        (airports) => dispatch({ type: RECEIVE_AIRPORTS, success: true, airports }),
        (error) => dispatch({ type: RECEIVE_AIRPORTS, success: false })
      );
    };
  },
/* eslint-enable */

  // 不同的action creator
  chooseAirport(target, airport) {
    return {
      type: CHOOSE_AIRPORT,
      target,
      code: airport ? airport.value : ''
    };
  },

  /* eslint-disable no-unused-vars */
  fetchTickets(origin, destination) {
    return (dispatch) => {
      dispatch({ type: REQUEST_TICKETS });
      AirCheapAPI.fetchTickets(origin, destination).then(
        (tickets) => dispatch({ type: RECEIVE_TICKETS, success: true, tickets }),
        (error) => dispatch({ type: RECEIVE_TICKETS, success: false })
      );
    };
  }
  /* eslint-enable */
};

export default AirportActionCreators;
