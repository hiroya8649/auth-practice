import axios from 'axios';

export function articleCreate(content) {
  return (dispatch, getState) => {
    console.log(getState());
    const { auth: { accessToken: token } } = getState();
    axios.post('/api/articles', { article: { content } }, { headers: { authorization: token } })
      .then(
        () => {
          dispatch({ type: 'ARTICLE_CREATE_SUCCESS' });
        },
      );
  };
}
