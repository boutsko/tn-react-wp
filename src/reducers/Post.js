import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const  initialState = {
  isFetching: false,
  error: false,
  entry: []
};
 
export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_POST_REQUIEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    default:
      return state;
  }
};
 
