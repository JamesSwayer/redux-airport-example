/*
 * 用于处理airpost 和 ticket取回操作的helper api
 */

import 'whatwg-fetch';

const AirCheapAPI = {
  fetchAirports() {
    return fetch('https://aircheapapi.pro-react.com/airposts')
    .then(response => response.json());
  }
};

export default AirCheapAPI;
