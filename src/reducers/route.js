import update from 'react-addons-update';
import { CHOOSE_AIRPORT } from '../constants';

const initialState = {
  origin: '',
  destination: '',
};

const route = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_AIRPORT:
      // action.target can be either 'origin' or 'destination'
      // action.code 包含选择的航班代号
      // return {
      //   ...state,
      //   target: action.code
      // };
      return update(state, { [action.target]: { $set: action.code } });
      
    default:
      return state;
  }
};

export default route;
