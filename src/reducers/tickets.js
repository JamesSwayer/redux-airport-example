import { REQUEST_TICKETS, RECEIVE_TICKETS } from '../constants';

const tickets = (state = [], action) => {
  switch (action.type) {
    // reset the state to an empty array
    case REQUEST_TICKETS:
      return [];
    case RECEIVE_TICKETS:
      return action.tickets;
    default:
      return state;
  }
};

export default tickets;
