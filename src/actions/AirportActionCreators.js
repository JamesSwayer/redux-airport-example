import { REQUEST_AIRPORTS, RECEIVE_AIRPORTS, CHOOSE_AIRPORT } from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

/* eslint-disable */
let AirportActionCreators = {
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

  // 不同的action creator
  chooseAirport(target, airport) {
    return {
      type: CHOOSE_AIRPORT,
      target,
      code: airport ? airport.valut : ''
    };
  }
};

export default AirportActionCreators;
