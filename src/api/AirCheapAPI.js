/*
 * 用于处理airpost 和 ticket取回操作的helper api
 */

import 'whatwg-fetch';

const AirCheapAPI = {
  fetchAirports() {
    return fetch('https://aircheapapi.pro-react.com/airports')
    .then(response => response.json());
  },

  fetchTickets(origin, destination) {
    return fetch(
      `https://aircheapapi.pro-react.com/tickets?origin=${origin}&destination=${destination}`
    )
    .then(response => response.json())
    .catch(error => error);
  }
};

export default AirCheapAPI;
