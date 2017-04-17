import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUIEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_REQUIEST,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_REQUIEST
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body))
      })
  }
}
