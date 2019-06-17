import axios from 'axios';

export function articleCreate(content) {
  return (dispatch, getState) => {
    const { auth: { accessToken: token } } = getState();
    axios.post('/api/articles', { article: { content } }, { headers: { authorization: token } })
      .then(
        () => {
          dispatch({ type: 'ARTICLE_CREATE_SUCCESS' });
        },
      );
  };
}

export function postList() {
  return (dispatch, getState) => {
    const { auth: { accessToken: token } } = getState();
    axios.get('/api/articles', { headers: { authorization: token } })
      .then(
        ({ data }) => {
          dispatch({ type: 'POST_FETCH_ALL_SUCCESS', payload: data });
        },
      );
  };
}
